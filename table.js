const body = document.querySelector('body');

const table = document.createElement('table');
table.style.borderCollapse = 'collapse';
let trHead = document.createElement('tr');


const tableHeader = ['Nr.', 'Full Name', 'Position', 'Salary'];

const tableContent = [
    {
        0: '1',
        1: 'Bill Gates',
        2: 'Founder Microsoft',
        3: '1000$'
    },
    {
        0: '2',
        1: 'Steve Jobs',
        2: 'Founder Apple',
        3: '1200$'
    },
    {
        0: '3',
        1: 'Larry Page',
        2: 'Founder Google',
        3: '1100$'
    },
    {
        0: '4',
        1: 'Mark Zukerberg',
        2: 'Founder Facebook',
        3: '1300$'
    },
]

for(let header of tableHeader){    
        let th = document.createElement('th');

        th.style.borderColor = 'gray';
        th.style.borderWidth = '2px';
        th.style.borderStyle = 'solid';
        th.style.padding = '12px';
        
        th.innerText = header;
        trHead.append(th);   
}

table.append(trHead);


for(let i = 0; i < tableContent.length; i++){
    let tr = document.createElement('tr');

    for(let j = 0; j < 4; j++){
        let td = document.createElement('td');
        td.innerText = tableContent[i][j];
        td.style.borderColor = 'gray';
        td.style.borderWidth = '2px';
        td.style.borderStyle = 'solid';
        td.style.padding = '12px';
        
        tr.append(td);
    }
    table.append(tr);
}

body.append(table);
