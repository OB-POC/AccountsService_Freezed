module.exports = {
    username: 'john',
    password: 'doe',
    UIN: 'UIN-xxxxx',
    creditScore: 650,
    banks: [
        {
            bankName: 'NatWest',
            bankId: 'NNaattWWeesstt',
            accounts: [
                {
                    accountType: 'CC',
                    accountNumber: 'XXXXXX XXXXXX6789',
                    accountTitle: 'Reward Black Credit Card',
                    creditLimit: '3,000',
                    availableCredit: '100',
                    totalBalanceDue: '2,900',
                    minBalanceDue: 50,
                    apr: 23.70,
                    dueDate: new Date().setDate(new Date().getDate()+5)                         
                }
            ]
        },
        {
            bankName: 'RBS',
            bankId: 'RRBBSS',
            accounts: [
                {
                    accountType: 'CC',
                    accountNumber: 'XXXXXX XXXXXX7890',
                    accountTitle: 'Classic Credit Card',
                    creditLimit: '4,000',
                    availableCredit: '2,000',
                    totalBalanceDue: '2,000',
                    minBalanceDue: 100,
                    apr: 27.10,
                    dueDate: new Date().setDate(new Date().getDate()+5)                          
                }
            ]
        },
        {
            bankName: 'Barclays',
            bankId: 'BBaarrccllaayyss',
            accounts: [
                {
                    accountType: 'M',
                    accountNumber: 'XXXXXX XXXXXX7890',
                    accountTitle: '2 Years Fixed Reward',
                    minMonthlyPayment: '800',
                    remainingFullTerm: '5Y 3M',
                    totalBalanceDue: '50,000',
                    interestRate: 3.3,
                    dueDate: new Date().setDate(new Date().getDate()+5)                         
                }
            ]
        }
    ]   
}