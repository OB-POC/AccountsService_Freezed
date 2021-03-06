module.exports = {
    "username": "alice",
    "password": "wonderland",
    "UIN": "UIN-xxxx",
    "creditScore": 700,
    "banks": [
        {
            bankName: 'NatWest',
            bankId: 'NNaattWWeesstt',
            accounts: [
                {
                    accountType: 'CC',
                    accountNumber: 'XXXXXX XXXXXX6789',
                    accountTitle: 'Reward Black Credit Card',
                    creditLimit: '3,000',
                    availableCredit: '1,200',
                    totalBalanceDue: '1,800',
                    minBalanceDue: 30,
                    apr: 37.10,
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
                    accountTitle: 'RBS Unlimited Credit Card',
                    creditLimit: '4,000',
                    availableCredit: '2,800',
                    totalBalanceDue: '1,200',
                    minBalanceDue: 100,
                    apr: 19.94,
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
