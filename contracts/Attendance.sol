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
    // modifier secure1
    // {
    //     require()
    // }

    function Register(string memory _enroll, string memory _name, uint _batch, uint _attendance) public secure
    {
        stud1 = Student(_enroll, _name, _batch, _attendance);
        stud_details.push(stud1);

    }

    function mark_roll(string memory _roll) public secure
    {
        //stud_details.push((stud_details[attendence]++))
        students1[_roll].attendence++;
    }

    function check_roll(string memory _roll) public view returns(uint)
    {
        return students1[_roll].attendence;
    }

    function All_Students() public view secure returns(Student[] memory)
    {
        return stud_details;
    }

    function Student_Details(string memory _x) public view returns(Student memory)
    {
        for(uint i=0; i<stud_details.length; i++)
        {
            if(keccak256(abi. encodePacked(stud_details[i].enroll)) == keccak256(abi. encodePacked(_x)))
            {
            return stud_details[i];
            }
        }
    } 
}