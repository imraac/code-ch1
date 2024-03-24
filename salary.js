// Constants for tax rates and deductions
const KRA_TAX_RATE = 0.3;
const NHIF_RATE = 0.02;
const NSSF_RATE = 0.06;

// Function to calculate Net Salary
function calculateNetSalary(basicSalary, benefits) {
    // Calculate gross salary
    let grossSalary = basicSalary + benefits;

    // Calculate PAYE (Tax)
    let payee = grossSalary * KRA_TAX_RATE;

    // Calculate NHIF Deductions
    let nhifDeductions = grossSalary * NHIF_RATE;

    // Calculate NSSF Deductions
    let nssfDeductions = grossSalary * NSSF_RATE;

    // Calculate Net Salary
    let netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    return {
        grossSalary,
        payee,
        nhifDeductions,
        nssfDeductions,
        netSalary
    };
}

// Example usage
const basicSalary = 50000;
const benefits = 10000;
const result = calculateNetSalary(basicSalary, benefits);
console.log(result);