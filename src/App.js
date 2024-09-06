// import React, { useState } from 'react';
// import './App.css'; // Import the CSS file
// import ImageCarousel from './ImageCarousel'; // Assume you create this as shown below
// import InformationDivs from './InformationDiv'; // Assume you create this as shown below

// const App = () => {
//     const [selectedTask, setSelectedTask] = useState('');

//     const handleTaskSelection = (task) => {
//         setSelectedTask(task);
//     };

//     return (
//         <div className="container">
            
//             <div className="button-container">
//                 <button onClick={() => handleTaskSelection('Task 1')}>Task 1</button>
//                 <button onClick={() => handleTaskSelection('Task 2')}>Task 2</button>
//                 <button onClick={() => handleTaskSelection('Task 3')}>Task 3</button>
//             </div>
//             <ImageCarousel />
//             <InformationDivs />
//             {selectedTask && <h2>You selected: {selectedTask}</h2>}
//         </div>
//     );
// };

// export default App;

import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import ImageCarousel from './ImageCarousel'; // Assume you create this as shown below
import InformationDivs from './InformationDiv'; // Assume you create this as shown below

const App = () => {
    const [selectedTask, setSelectedTask] = useState('');
    const [customers, setCustomers] = useState([]);

    const handleTaskSelection = async (task) => {
        setSelectedTask(task);
        
        if (task === 'Task 2') {
            // Fetch data from the API
            try {
                const response = await fetch('http://localhost:3000/api/customers');
                const data = await response.json();
                setCustomers(data);
            } catch (error) {
                console.error('Error fetching customer data:', error);
            }
        }
    };

    return (
        <div className="container">
            <div className="button-container">
                <button onClick={() => handleTaskSelection('Task 1')}>Task 1</button>
                <button onClick={() => handleTaskSelection('Task 2')}>Task 2</button>
                <button onClick={() => handleTaskSelection('Task 3')}>Task 3</button>
            </div>
            <ImageCarousel />
            <InformationDivs />
            {/* {selectedTask && <h2>You selected: {selectedTask}</h2>} */}
            {selectedTask === 'Task 2' && (
                <div>
                    <h3>Top 20 Customers</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>CustomerID</th>
                                <th>Title</th>
                                <th>FirstName</th>
                                <th>MiddleName</th>
                                <th>Last Name</th>
                                <th>Suffix</th>
                                <th>Company Name</th>
                                <th>Sales Person</th>
                                <th>EmailAddress</th>
                                <th>Phone</th>
                                <th>ModifiedDate</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map(customer => (
                                <tr key={customer.CustomerID}>
                                    <td>{customer.CustomerID}</td>
                                    <td>{customer.Title}</td>
                                    <td>{customer.FirstName}</td>
                                    <td>{customer.MiddleName}</td>
                                    <td>{customer.LastName}</td>
                                    <td>{customer.Suffix}</td>
                                    <td>{customer.CompanyName}</td>
                                    <td>{customer.SalesPerson}</td>
                                    <td>{customer.EmailAddress}</td>
                                    <td>{customer.Phone}</td>
                                    <td>{customer.ModifiedDate}</td>
                                n   </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default App;
