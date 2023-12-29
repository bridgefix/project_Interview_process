import { MDBDataTable } from 'mdbreact';
import react from 'react'

const Ptable = () => {
    const data = {
        columns: [
          {
            label: 'Questions',
            field: 'name',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Answers',
            field: 'position', 
            sort: 'asc',
            width: 270
          }
        ],
        rows: [
          {
            name: 'What is python?',
            position: 'python is a JavaScript library for building user interfaces.'
          },
          {
            name: 'What is python?',
            position: 'python is a JavaScript library for building user interfaces.'
          },
          {
            name: 'What is Java?',
            position: 'Java is a JavaScript library for building user interfaces.'
          },
          {
            name: 'What is Java?',
            position: 'Java is a JavaScript library for building user interfaces.'
          },
          {
            name: 'What is Python?',
            position: 'Python is a JavaScript library for building user interfaces.'
          },
          {
            name: 'What is Python?',
            position: 'Python is a JavaScript library for building user interfaces.'
          },
          {
            name: 'What is Python?',
            position: 'Python is a JavaScript library for building user interfaces.'
          },
          {
            name: 'What is Python?',
            position: 'Python is a JavaScript library for building user interfaces.'
          },
          {
            name: 'What is Python?',
            position: 'Python is a JavaScript library for building user interfaces.'
          },
          {
            name: 'What is ruby?',
            position: 'ruby is a JavaScript library for building user interfaces.'
          },
          {
            name: 'What is ruby?',
            position: 'ruby is a JavaScript library for building user interfaces.'
          },
          {
            name: 'What is ruby?',
            position: 'ruby is a JavaScript library for building user interfaces.'
          },
          {
            name: 'What is ruby?',
            position: 'ruby is a JavaScript library for building user interfaces.'
          },
          {
            name: 'What is ruby?',
            position: 'ruby is a JavaScript library for building user interfaces.'
          },
          {
            name: 'What is ruby?',
            position: 'ruby is a JavaScript library for building user interfaces.'
          },
          
        ]
      };
    
      return (
        <div style={{ marginTop: "30px", marginLeft: "50px" }}>
          <MDBDataTable
            striped
            bordered
            small
            data={data}
          />
        </div>
      );
    
}

export default Ptable