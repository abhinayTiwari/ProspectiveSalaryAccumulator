function calculateEarnings() {
  const currencyType = document.getElementById('currencyType').value || '$';
   const baseSalary = parseFloat(document.getElementById('baseSalary').value);
   const annualIncrease = parseFloat(document.getElementById('annualIncrease').value) / 100;
   const yearlyBonus = parseFloat(document.getElementById('yearlyBonus').value);
   const careerYears = parseInt(document.getElementById('careerYears').value);
 
   let totalEarnings = 0;
   let currentSalary = baseSalary;
 
   for (let i = 1; i <= careerYears; i++) {
     totalEarnings += currentSalary;
     currentSalary *= (1 + annualIncrease);
     totalEarnings += yearlyBonus;
   }
 
   const earningsDisplay = document.getElementById('totalEarnings');
   earningsDisplay.textContent = `Total earnings in ${careerYears} years will be ${currencyType}${totalEarnings.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.`;
 }
 