import React from 'react';

const InformationDivs = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, margin: '10px', padding: '20px', border: '1px solid green' }}>
                Name: Kunal Jain
                <br/>
                <br/>
                Role: Asoosicate Software Engineer
            </div>
            <div style={{ flex: 1, margin: '10px', padding: '20px', border: '1px solid green' }}>
                Company:MAQ Software
                <br/>
                <br/>  
                Emp-Id:EMPN 1162
            </div>
        </div>
    );
};

export default InformationDivs;
