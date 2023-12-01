// groupConsultants.js

function groupConsultantsByCompany(consultants) {
    const groupedConsultants = {};
  
    consultants.forEach((consultant) => {
      const { name, company } = consultant;
  
      if (!groupedConsultants[company]) {
        groupedConsultants[company] = [];
      }
  
      groupedConsultants[company].push({ name, company });
    });
  
    return groupedConsultants;
  }
  
  const consultants = [
    { name: 'Peyton Turner', company: 'Walker Inc' },
    { name: 'Isaias Fritsch', company: 'Walker Inc' },
    { name: 'Susana Wilderman', company: 'Nolan Inc' }
  ];
  
  const groupedConsultants = groupConsultantsByCompany(consultants);
  console.log(groupedConsultants);
  