// SPDX-License-Identifier:MIT

pragma solidity ^0.8.7;

contract attendence
{
    address Faculty;
    address[] stud_addr;

    constructor() 
    {
        Faculty = msg.sender;
    }

    struct Student
    {
        string enroll;
        string name;
        uint batch;
        uint attendence;
    }

    // Student[] student;
    // mapping(uint => Student) students;
    mapping(string => Student) public students1;
    Student[] public stud_details;
    Student stud1;
    string x = "Student Not Found";

    modifier secure
    {
        require(msg.sender == Faculty, "You are not Faculty to Register Students.");
        _;
    }

    function Register(string memory _enroll, string memory _name, uint _batch, uint _attendance) public secure
    {
        for(uint i=0; i<stud_details.length; i++)
        {
            require(keccak256(abi. encodePacked(stud_details[i].enroll)) != keccak256(abi. encodePacked(_enroll)), "already registered.");
        }
        stud1 = Student(_enroll, _name, _batch, _attendance);
        stud_details.push(stud1);

    }

    function mark_roll(string memory _roll) public secure
    {
        for(uint i=0; i<stud_details.length; i++)
        {
            require(keccak256(abi. encodePacked(stud_details[i].enroll)) == keccak256(abi. encodePacked(_roll)), "student not enrolled.");
        }
        students1[_roll].attendence++;
    }

    function check_roll(string memory _roll) public view returns(uint)
    {
        for(uint i=0; i<stud_details.length; i++)
        {
            require(keccak256(abi. encodePacked(stud_details[i].enroll)) == keccak256(abi. encodePacked(_roll)), "enroll number not found");
            // require(keccak256(abi.encodedPacked(st)))
        }
        return students1[_roll].attendence;
    }

    function All_Students() public view secure returns(Student[] memory)
    {
        return stud_details;
    }

    function Array_Size() public view returns(uint)
    {
        return stud_details.length;
    }

    function Student_Details(string memory _roll, string memory __name ) public view returns(Student memory)
    {
        for(uint i=0; i<stud_details.length; i++)
        {
            if(keccak256(abi. encodePacked(stud_details[i].enroll)) == keccak256(abi. encodePacked(_roll)))
            {
            return stud_details[i];
            }
            if(keccak256(abi. encodePacked(stud_details[i].name)) == keccak256(abi. encodePacked(__name)))
            {
            return stud_details[i];
            }
        }
    } 
}