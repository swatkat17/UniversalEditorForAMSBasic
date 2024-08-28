export default function decorate(block) {
    const [tableWrapper] = block.children;
  
    // Create table elements
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
  
    // Assuming the first child of tableWrapper contains the headers and the rest contains the rows
    const headers = tableWrapper.querySelectorAll('div:first-child div');
    const rows = tableWrapper.querySelectorAll('div:not(:first-child)');
  
    // Construct the header row
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
      const th = document.createElement('th');
      th.textContent = header.textContent.trim();
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
  
    // Construct the table rows
    rows.forEach(row => {
      const tr = document.createElement('tr');
      const cells = row.querySelectorAll('div');
      cells.forEach(cell => {
        const td = document.createElement('td');
        td.textContent = cell.textContent.trim();
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  
    // Assemble the table
    table.appendChild(thead);
    table.appendChild(tbody);
  
    // Replace the original content with the table
    tableWrapper.replaceChildren(table);
  }
  