// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.19;

contract Dtsp {

    // Structure to store analysis information
    struct Analysis {
        string md5;                
        string flagged_malicious;   
        string file_type;           
        uint64 size;                
        string last_analysis;       
    }

    // State variable to track the emergency stop status of the contract
    bool private isStopped = false;

    // Mapping to store analyses using the SHA-256 hash as the key
    mapping(string => Analysis) private analysis_map;
    
    // Variable to store the owner's address
    address private owner;

    // Event emitted when an analysis is stored
    event AnalysisStored(string indexed sha_256, string md5, string flagged_malicious, string file_type, uint64 size, string last_analysis);

    // Constructor to set the contract owner
    constructor() {
        owner = msg.sender; 
    }

    // Modifier to restrict function access to the contract owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can call this function");
        _;
    }

    // Modifier to check if the contract is stopped in an emergency
    modifier stoppedInEmergency(){
        require(!isStopped, "The Contract is under emergency stop.");
        _;
    }

    // Function to stop the contract in an emergency
    function stopContract() public onlyOwner{
        isStopped = true;
    }

    // Function to resume the contract from an emergency stop
    function resumeContract() public onlyOwner{
        isStopped = false;
    }

    // Function to store an analysis
    function storeAnalysis(string calldata sha_256, string calldata md5, string calldata flagged_malicious, string calldata file_type, uint64 size, string calldata last_analysis) public stoppedInEmergency{
        Analysis storage analysis = analysis_map[sha_256];
        
        // If the analysis does not exist, create a new entry
        if (bytes(analysis.md5).length == 0) {
            analysis_map[sha_256] = Analysis(md5, flagged_malicious, file_type, size, last_analysis);
        } else {
            // If the analysis exists, update the relevant fields
            analysis.flagged_malicious = flagged_malicious;
            analysis.last_analysis = last_analysis;
        }

        // Emit an event after storing the analysis
        emit AnalysisStored(sha_256, md5, flagged_malicious, file_type, size, last_analysis);
    }

    // Function to retrieve an analysis
    function retrieveAnalysis(string calldata sha_256) public stoppedInEmergency view returns (string memory, string memory, string memory, uint64, string memory) {
        Analysis memory analysis = analysis_map[sha_256];
        return (analysis.md5, analysis.flagged_malicious, analysis.file_type, analysis.size, analysis.last_analysis);
    }

    // Function to transfer ownership of the contract
    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "Invalid new owner address");
        owner = newOwner;
    }

    // Function to store an analysis by the owner without emergency stop checks
    function storeAnalysisOwner(string calldata sha_256, string calldata md5, string calldata flagged_malicious, string calldata file_type, uint64 size, string calldata last_analysis) public onlyOwner {
        analysis_map[sha_256] = Analysis(md5, flagged_malicious, file_type, size, last_analysis);
    }

    // Function to retrieve an analysis by the owner without emergency stop checks
    function retrieveAnalysisOwner(string calldata sha_256) public onlyOwner view returns (string memory, string memory, string memory, uint64, string memory) {
        Analysis memory analysis = analysis_map[sha_256];
        return (analysis.md5, analysis.flagged_malicious, analysis.file_type, analysis.size, analysis.last_analysis);
    }
}
