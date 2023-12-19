const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const {OAuth2} = google.auth;
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground'
//const styles  = require('./Invoice.module.css')

const {
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    SENDER_EMAIL_ADDRESS
} = process.env

const oauth2Client = new OAuth2(
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    OAUTH_PLAYGROUND
)

// send mail
const sendEmail = (name,mail,message,forma,candidats,txt) => {
    oauth2Client.setCredentials({
        refresh_token: MAILING_SERVICE_REFRESH_TOKEN
    })

    const accessToken = oauth2Client.getAccessToken()
    const smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: SENDER_EMAIL_ADDRESS,
            clientId: MAILING_SERVICE_CLIENT_ID,
            clientSecret: MAILING_SERVICE_CLIENT_SECRET,
            refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
            accessToken
        }
    })


    const mailOptions = {
        from: SENDER_EMAIL_ADDRESS,
        to: SENDER_EMAIL_ADDRESS,
        subject:  txt ? txt : txt ='Formation'  , 
        html:
        `
        <html>
        <head>
        <style>
        .column {
            flex-basis: 50%;
          }
            body {
                font-family: 'Whyte';
            }
         
        .container {
         display: flex;
       align-items: flex-start;
     justify-content: space-between;


  }
            img {
                height: 25px;
                width: 250px;
                margin-top: 100px;
                display: flex;
                margin-left: -5px;
            }
            p {
                font-size: 10px;
            }
            h1 {
                width: 250px;
                height: 50px;
                margin-left: 50px;
                margin-top: 200px;
            }
            .invoice-details {
                margin-top: 0px;
            }
            .invoice-details h6 {
                margin-left: 10px;
                text-shadow: 2px 2px 5px grey;
                font-size: 20px;
                margin-top: 10px;
            }
            .invoice-details h6.small {
                font-size: 15px;
            }
            table {
                margin-top: 50px;
                margin-right: 400px;
                width: 930px;
            }
            th, td {
                padding: 8px;
                text-align: left;
            }
            th {
                background-color: #ddd;
            }
            .summary {
                margin-left: 50px;
                margin-top: 50px;
            }
            .summary .summary-item {
                display: flex;
            }
            .summary .summary-item p {
                margin-right: 10px;
            }
            .summary .summary-item h4 {
                color: grey;
                font-size: 18px;
                line-height: 8px;
            }
            .payment-details {
                margin-bottom: 20px;
            }
            .payment-details h1 {
                margin-left: 100px;
            }
            button.print-button {
                color: green;
            }  
            /*Invoice.module.css*/
    
            
    
    
    
      
      .invoiceSummary div {
        border-bottom: 1px solid rgb(231, 231, 231);
        font-family: "Roboto", Tahoma, Geneva, Verdana, sans-serif;
        text-align: left;
        margin-left: 50%;
        font-size: 15px;
        display: flex;
        color: gray;
      }
      
      .summary {
        background-color: rgb(247, 247, 247);
        font-weight: 500;
        padding: 15px 0px;
        padding-left: 15px;
      }
      
      .summaryItem {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      
      .summaryItem p, h4 {
        padding: 15px;
      }
      
      .summaryItem input {
        font-family: "Roboto", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 15px;
        border: none;
        outline: none;
        text-align: right;
      }
      
    
      .summaryItem span {
        text-align: left;
      }
     
    
    
      .but {
        background-color: #c2fbd7;
        border-radius: 100px;
        box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
        color: green;
        cursor: pointer;
        display: inline-block;
        font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
        padding: 7px 20px;
        text-align: center;
        text-decoration: none;
        transition: all 250ms;
        border: 0;
        font-size: 16px;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        position: relative;
      }
      
      .but:hover {
        box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
        transform: scale(1.05) rotate(-1deg);
      }
    
      .but2 {
        background-color: #c2fbd7;
        border-radius: 100px;
        box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
        color: green;
        cursor: pointer;
        display: inline-block;
        font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
        padding: 7px 20px;
        text-align: center;
        text-decoration: none;
        transition: all 250ms;
        border: 0;
        font-size: 16px;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        position: relative;
      }
      
      .but2:hover{
        box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
        transform: scale(1.05) rotate(-1deg);
      }
    
    
      .but2:hover::before {
        content: "Enregistez les modification avant de les imprimer!!";
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        background-color: #000;
        color: #fff;
        padding: 5px;
        border-radius: 5px;
        font-size: 14px;
      }
      
      
      
      
      
      
      
    
      @media print {
        /* Masquer le bouton d'impression */
        .print-button {
          display: none;
        }
      }
    
    
      @media screen and (max-width: 768px) {
            /* Styles spécifiques pour les écrans de taille inférieure à 768px */
        }
        
        @media screen and (min-width: 769px) {
            /* Styles spécifiques pour les écrans de taille supérieure ou égale à 769px */
        }
      
    
      
    
        </style>
         </head>
        
        <body>
        <table class="table" aria-label="simple table">
        <thead>
        <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Formation</th>
            <th>Message</th>
         </tr>
        </thead>
        <tbody>
        ${candidats.map((itemField, index) => (
            `<tr key="${index}">
                <td>
                    <div>${itemField.name}</div>
                </td>
                <td>
                   <div>${itemField.mail}</div> 
                </td>
                <td>
                  ${itemField.forma}
                </td>
                <td>
                    ${itemField.message}
                </td>
            </tr>`
        )).join('')}
    </tbody>
    </table>

        </body>
     
               <script>    const tableBody = document.getElementById("tableBody");
               </script>
         </html>  
        `,
    }
 

    smtpTransport.sendMail(mailOptions, (err, infor) => {
        if(err) return err;
        return infor
    })
}

module.exports = sendEmail