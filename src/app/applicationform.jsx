'use client';

import { useState } from 'react';
import Head from 'next/head';
import ApplicationForm from './inputform';
import AppointmentScheduler from './datepicker';

const agreementSections = [
  {
    // title: 'Credit Repair Service Agreement',
    content: `Credit Repair Service Agreement 
hereby enter into the following agreement with 365 Credit Clinic LLC, a Florida limited liability company ("365 Credit Clinic" or "Company") with its address at 12150 SW 128th Court, Suite #230  Miami, FL 33186
 
WHEREAS, Company is in the business of assisting individuals with correcting erroneous errors and other questionable or misleading data found in credit reports by challenging credit items which may be inaccurate, unverifiable, incomplete, obsolete, questionable, and/or misleading ("Services");
WHEREAS, Client desires to retain Company for the Services;
WHEREAS, Company agrees to provide the Services described herein to Client;
NOW THEREFORE, in consideration of the mutual covenants and agreements hereinafter set forth, the parties agree as follows:
 
SECTION 1. 365 Credit Clinic hereby agrees to perform the following Services
A. To evaluate Client's current credit reports and scores as listed with applicable credit reporting agencies.
B. To consult Client regarding their individuals needs or concerns.
C. To audit credit reports and scores and identify inaccurate, erroneous, false, misleading, or obsolete information.
D. To advise Client as to the necessary steps to be taken on the part of Client in conjunction with Company, to dispute any inaccurate, erroneous, false, misleading, or obsolete information contained in the Client's credit reports.
E .To advise Client on repairing derogatory credit items and improving credit
F. To draft and prepare all necessary correspondence to dispute inaccurate, erroneous, false, misleading, or obsolete information with the credit bureaus on Client's behalf
G. To contact creditors and collection agencies to challenge and/or obtain
H. To take preventative measures to ensure the safety and security of all sensitive
I. To review credit profile status from the credit reporting agencies such as: Experian, Equifax and Transunion.
J. To consult with Client once a month via Text, Email or Phone Consultation.
 
SECTION 2. In exchange for the Services, Client agrees to pay the fees as outlined in the following fee schedule:
A.     $124.00 (Single Plan) / $199.00 (Couple Plan) Document processing feedue upon
B.    $124.00 (Single Plan) / $199.00 (Couple Plan) foreach month of Service.
Client acknowledges that Company shall issue an invoice for the fees at the end of each month for the Service. Client shall pay the invoicewithin ten (10) daysof receipt of the invoice. If any amount payable to Company is not paid on time, Company shall be entitled to immediately cease providing Services, as well as pursue all other remedies available to Company at law or in equity.
 
SECTION 3. The term of this Agreement shall be up too 36 months (the "Term" The Term is an estimation of the length of time necessary to perform the Services. However, in no way is the Term a guarantee of completion of the Services within such time. If additional time is necessary, Company shall notify Client and Client agrees to continue paying for the Services monthly.
 
Section 4. Client Acknowledges that : 
A. Client is required to provide all meteraisl requested by Company in a timely manner.
B. Client must allow company and its agents a minimum of 120 days or more to perform the Services hereunder.
C. During this Agreement, Client shall not engage with any other agency or individual for credit repair services, without prior consent of Company, as such activity will impair the effectiveness of the Services.
C. During this Agreement, Client shall not engage with any other agency or individual for credit repair services, without prior consent of Company, as such activity will impair the effectiveness of the Services.
D. Client has read and understands the Information Statement set forth in Exhibit
A.
E.    Client Agrees 365 Credit Clinic 
F.     Client grants Company and its agents authority to do, take, and perform all acts whatsoever requisite, proper, necessary to be done, in the exercise of repairing Client's credit with the three credit reporting agencies and any other credit bureau or creditor listed, for all intents and purposes as Client might or could do if personally present.
G.     Client shall cooperate with Company in all matter relating to the Services, respond promptly to any Company request to provide direction, information, approvals, authorizations, or decisions that are reasonably necessary for Company to perform the Services in accordance with the requirements of this Agreement, and provide such documents or information as Company may reasonably request to carry out the Services in a timely manner.
H.     If Company's performance under this Agreement is prevented or delayed by any act or omission of Client, Company shall not be deemed in breach of its obligations hereunder or otherwise liable for costs, charges, or losses sustained or incurred by Client to the extent arising directly or indirectly from such prevention or delay.
 
SECTION 5. All internal letters created and used during the Services are solely owned by Company and are not shared or shown to the Client. Client agrees that Client is not entitled to view any such internal letters.
SECTION 6. Disclaimers.
A.     Client is aware that all negative items will be disputed, any inquiry that is not associated with an open account will be disputed and it is the obligation of Client to inform Company of any items to not be disputed within 24 hours of execution of this Agreement. Company and its respective agents, employees, and/or contractors shall not be responsible for any accounts that may be closed due to the dispute process.
B.     Company shall use its commercially reasonable efforts to remove all inaccurate items on Client's credit report. Company does not represent, warrant or guarantee that any items will be removed from Client's file. In particular, Company does not represent, warrant or guarantee that Company will be able to delete an adverse credit history. An adverse credit history can only be deleted if the credit history is inaccurate or obsolete and is not claimed to be accurate by the creditor who submitted the information. Company makes no warranty
whatsoever with respect to the Services, including any (a) warranty of merchantability; or (b) warranty of fitness for a particular purpose; or (c) warranty of title; or (d) warranty against infringement of intellectual property rights of a third party; whether express or implied by law, course of dealing, course of performance, usage of trade, or otherwise. Company does not warrant, guarantee, or make any representations regarding the results obtained.
C. To complete the full process of credit repair, when Client receives information in the mail from Equifax, Experian and Transunion, or any other credit bureau, it is imperative that Client contacts Company's repair team immediately. The information received from the Credit Bureaus will help Company continue the dispute process. Failure to contact Company promptly will result in delay or non-completion of Client's credit repair. Company and its respective agents, employees, and/or contractors shall not be responsible for any accounts that get closed throughout the dispute process. It is the Client's obligation not to apply for new credit while Company is in the process of disputing negative remarks on Client's account and resolving disputed items on Client's credit report. Applying for new credit will negate the progress that Company has made. Company will not dispute new negative items that appear after this Agreement is signed.
 
SECTION 7. Notwithstanding the Client's rights under the Credit Repair Organization Act, Client hereby releases Company and its respective agents from any and all matters or cation, causes of action, suits, proceedings, debts, dues, contracts, judgments, damages, claims, and demands whatsoever in law or equity, for or by reason of any matter, cause, or claim whatsoever arising from or in connection with this Agreement. IN NO EVENT WILL COMPANY BE LIABLE FOR ANY CONSEQUENTIAL, INCIDENTAL, INDIRECT, SPECIAL OR EXEMPLARY DAMAGES (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, LOSS OF GOODWILL, BUSINESS INTERRUPTION, LOSS OF BUSINESS OPPORTUNITY, OR ANY OTHER PECUNIARY LOSS) SUFFERED RELATED TO COMPANY'S OBLIGATIONS HEREUNDER OR FROM ANY OTHER CAUSE WHATSOEVER, WHETHER BASED UPON CONTRACT, TORT, NEGLIGENCE, WARRANTY, EVEN IF COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT WILL THE CUMULATIVE LIABILITY OF COMPANY TO CLIENT FOR ANY REASON UPON ANY CAUSE OF ACTION EXCEED THE AMOUNT ACTUALLY PAID TO COMPANY UNDER THIS AGREEMENT BY CLIENT. THIS LIMITATION APPLIES TO ALL CAUSES OF ACTION IN THE AGGREGATE INCLUDING, WITHOUT LIMITATION, TO BREACH OF CONTRACT, NEGLIGENCE, STRICT LIABILITY, MISREPRESENTATION, AND OTHER TORTS.
SECTION 8. Neither party shall make any oral or written statement about the other party, its owners, officers, employees, agents, contractors, and/or affiliates, which is intended or reasonably likely to disparage the other party, or otherwise degrade the other party's reputation.
SECTION 9. The relationship between the parties is that of independent contractors. Nothing contained herein shall be construed as creating any agency, partnership, joint venture, or other form of joint enterprise, employment, or fiduciary relationship between the parties, and neither party shall have the authority for or bind the other party except as expressly provided in this Agreement.
SECTION 10. This Agreement is deemed to have been made and entered into exclusively in the State of Florida. This Agreement and its enforcement shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions. All disputes with respect to the interpretation of this Agreement or with respect to an alleged breach of any representation, warranty, covenant, or agreement under this Agreement shall be resolved by arbitration. Any such arbitration proceeding shall be governed by the rules of the American Arbitration Association (the "AAA" There shall be one arbitrator who shall be selected by the AAA from its list of qualified arbitrators and who shall have no actual or potential conflict in deciding or hearing the dispute. The parties shall agree in advance as to the manner in which the arbitrator shall promptly hear witnesses and arguments, review documents and otherwise conduct the arbitration proceedings. All parties shall receive notice of the subject of the arbitration, and the arbitration proceedings. All parties shall receive notice of the subject of the arbitration, and the arbitration shall not be binding on any party with respect to any matters not specified in such notice. Should the parties fail to reach an agreement as to the conduct of such proceedings, the arbitrators shall formulate its own procedural rules and promptly commence the arbitration proceedings. The arbitration proceedings shall be concluded as expeditiously as possible with due consideration for the complexity of the dispute in question. The arbitrator shall issue its decision in writing within thirty (30) days from the hearing of final arguments by the parties. The arbitration award (which shall not include punitive damages) shall be given in writing and shall be final and binding on the parties with respect to the subject matter identified in the notice called for above and not subject to any appeal and shall deal with the question of costs of arbitration. Judgment upon the award may be entered in any court having jurisdiction or application may be made to such court for a judicial recognition of the award or an order of enforcement thereof, as the case may be. Any award or order provided by the arbitrator shall provide the prevailing party recovery of reasonable attorney's fees and costs. The arbitrator shall decide which party is the prevailing party. THE PARTIESACKNOWLEDGE THAT IN THE EVENT OF A DISPUTE THE PARTIES WAIVETHEIR RIGHT TO TRIAL BY JURY.
SECTION 11. This Agreement constitutes the entire agreement of the Parties and supersedes all prior and contemporaneous agreements, proposals, negotiations, 
conversations, or discussions between the parties. This Agreement may only be amended or modified in writing and signed by both parties.
SECTION 12. No term or condition of this Agreement shall be deemed to have been waived except by written instrument of the party charged, and each waiver shall operate only as to the specific term or condition waived.
SECTION 13. This Agreement shall be binding upon and shall inure to the benefit of the parties hereto. This Agreement shall inure to the benefit of each of the parties and their respective successors and assigns.
 
SECTION 14. Neither party may assign or delegate its rights or obligations under this Agreement without the prior written consent of the other party.
SECTION 15. The termination of this Agreement shall not affect any accrued rights or liabilities of either party or affect the coming into force or the continuance in force of any provision which is expressly or by implication intended to come into or continue in force on or after termination.
SECTION 16. If any provision is held to be invalid or unenforceable by a court of competent jurisdiction, this shall not affect other provisions of this Agreement and the provisions held to be invalid or unenforceable shall be deemed amended as to render them enforceable as nearly as possible to the original intentions of the Parties. The Parties each acknowledge that this Agreement was fully negotiated by the Parties and, therefore, no provision of this Agreement shall be interpreted against any party because such party or its legal representative drafted such provision. Each party to this Agreement had the opportunity to consult with legal counsel regarding the rights and obligations under this Agreement and has thoroughly reviewed the Agreement.
SECTION 17. This Agreement may be executed in one or more counterparts, each of which shall be deemed an original but all of which together will constitute one and the same instrument. When submitting documents online, the Client agrees that his or her digital signature is equivalent to a handwritten signature.
SECTION 18. Client may cancel this Agreement, without any penalty or obligation, within five days from the date this Agreement is signed. If Client cancels, any payment made by Client under this Agreement will be returned within ten days following Company's receipt of Client's Notice of Cancellation. To cancel this Agreement, mail or deliver a signed, dated copy of the cancellation notice set forth on Exhibit B attached hereto to Company no later than midnight on the fifth day after the execution of this Agreement.`
  },
  {
    // title: 'Authorization for Credit Repair Action',
    content: `Authorization for Credit Repair Action
1. Client hereby authorizes Company to make, receive, sign, endorse, execute, acknowledge, deliver, and possess such applications, correspondence, contracts, or agreements, as necessary to improve Client's credit and provide the Services in this Agreement. Such instruments in writing of whatever nature shall only be effective for any or all of the three credit reporting agencies which are TransUnion, Experian, Equifax, and any other reporting agencies or creditor's listed, as may be necessary or proper in the exercise of the rights and powers herein granted.
2. This authorization may be revoked by the undersigned at any time by giving written five (5) business days notice to the party authorized herein. Any activity made prior to revocation in reliance upon this authorization shall not constitute a breach of rights of the client. If not earlier revoked, this authorization will automatically expire twelve (12) months from the date of signature.
 
3.The party named above to receive the information is not authorized to make any further release or disclosure of the information received. This authorization does not authorize the release or disclosure of any information except as provided herein.
4. I grant to 365 Credit Clinic, authority to do, take, and perform, all acts and things whatsoever requisite, proper, or necessary to be done, in the exercise of repairing my credit with the three credit reporting agencies, which are TransUnion, Experian, Equifax and any other reporting agencies or creditor's listed, as fully for all intents and purposes as I might or could do if personally present.

Manager of 365 Credit Clinic : Geovanni Suris`
  },
  {
    // title: 'Authorization Phone Payment Processing',
    content: `Authorization Phone Payment Processing

At 365 Credit Clinic, we are committed to providing secure and transparent payment processing services in full compliance with applicable regulations. This policy outlines the terms and conditions under which payments for credit repair services will be authorized and processed via telephone.

1. Payment Authorization
By providing your payment information over the phone, you authorize 365 Credit Clinic to charge the agreed-upon amount to your specified payment method for the credit repair services provided. This authorization is valid for a one-time transaction or recurring payments as mutually agreed upon.

2. Consent to Telephone Payment Processing
By agreeing to this policy:

You confirm that you are the authorized user of the payment method provided.
You consent to 365 Credit Clinic processing payments via telephone in compliance with all applicable laws and regulations, including TCR guidelines.
You acknowledge that you have been informed of and agree to the terms of the payment before the transaction is processed.
3. Stopping Call Recordings During Payment
To protect the confidentiality of your payment information:

All phone call recordings will be paused or stopped before collecting sensitive financial information such as credit card or bank account numbers.
Payment information will not be recorded, stored, or saved as part of the call recording process.
Once the payment details have been provided and confirmed, the recording may resume (if applicable) for non-sensitive portions of the call.
4. Security and Privacy
To ensure the safety of your financial information, 365 Credit Clinic follows strict security protocols:

Payment details provided over the phone are handled with the highest confidentiality.
No payment information will be stored without your explicit consent, except as necessary to complete the transaction or for legally required record-keeping purposes.
5. Dispute Resolution
If you believe a payment has been processed in error, please contact 365 Credit Clinic immediately at [Insert Contact Information]. We are committed to resolving any disputes promptly and fairly.

6. Acknowledgment and Agreement
By proceeding with the payment over the phone, you:

Agree to the terms and conditions set forth in this policy.
Confirm that the payment is authorized by you or a representative acting on your behalf.
If you have any questions about this policy or our payment processing procedures, please contact us at:

365 Credit Clinic
Phone: [Insert Phone Number]
Email: [Insert Email Address]`
  },
  {
    // title: 'Information Statement Required Under Federal and Florida Law',
    content: `Information Statement Required Under Federal and Florida Law
1.     You have a right to dispute inaccurate information by contacting the consumer credit reporting agency directly. However, neither you nor any credit repair company or credit services organization has the right to have accurate, current, and verifiable information removed from your credit report. Under the Federal Fair Credit Reporting Act, the consumer credit reporting agency must remove accurate, negative information from your report only if it is over 7 years old. Bankruptcy information can be reported for 10 years.

2.      You have a right to obtain a copy of your credit report from a credit bureau. You may be charged a reasonable fee. There is no fee, however, if you have been turned down for credit, employment, insurance, or a rental dwelling because of information in your credit report within the preceding 60 days. The credit bureau must provide someone to help you interpret the information in your credit file. You are entitled to receive a free copy of your credit report if you are unemployed and intend to apply for employment in the next 60 days, if you are a recipient of public welfare assistance, or if you have reason to believe that there is inaccurate information in your credit report due to fraud.

3.      You have a right to sue a credit repair organization that violates the Credit Repair Organization Act. This law prohibits deceptive practices by credit repair organizations. You have a right to sue a credit services organization if it misleads you.

4.      You have the right to cancel your contract with any credit repair organization for any reason within three business days from the date you signed it.

5.      Credit bureaus are required to follow reasonable procedures to ensure that the information they report is accurate. However, mistakes may occur.

6.      You may, on your own, notify a credit bureau in writing that you dispute the accuracy or completeness of information in your credit file. The credit bureau must then reinvestigate and modify or remove inaccurate or incomplete information. The credit bureau may not charge any fee for this service. Any pertinent information and copies of all documents you have concerning an error should be given to the credit bureau.

7.      If the credit bureau's reinvestigation does not resolve the dispute to your satisfaction, you may send a brief statement to the credit bureau, to be kept in your file, explaining why you think the record is inaccurate. The credit bureau must include a summary of your statement about disputed information with any report it issues about you.

8.      The Federal Trade Commission regulates credit bureaus and credit repair organizations.

For infomation contact: The Public Refrence Branch 

Federal Trade Commison

Washington, D.C. 20580

 

9. If you have notified a credit reporting agency in writing that you dispute the accuracy of information in your credit file, the consumer credit reporting agency must then reinvestigate and modify or remove inaccurate information. The consumer credit reporting agency may not charge a fee for this service. Any pertinent information and copies of all documents you have concerning an error should be given to the consumer credit reporting agency.

10. If reinvestigation does not resolve the dispute to your satisfaction, you may send a brief statement to the consumer credit reporting agency to keep in your file, explaining why you think the record is inaccurate. The consumer credit reporting agency must include your statement about disputed information in any report it issues about you.

11. You, as a consumer, have the right to contact your own state authorities that regulate credit bureaus and credit service organizations. You understand there are nonprofit consumer credit counseling services available.

12. Florida law allows for the payment of services in advance, but only if the organization maintains a surety bond of $10,000 and a trust account by which the consumer can provide funds to be billed as the services are rendered. You have the right to proceed against the bond

CREDIT SERVICE ORGANIZATION SURETY BOND #  SB271887

PLATE RIVER INSURANCE CORPORATION

 

By signing below, you hereby acknowledge receipt of this statement before any contract or agreement between you and 365 Credit Clinic LLC is executed.`
  },
  {
    // title: 'Acknowledgment of Terms of Satisfaction Guarantee',
    content: `Acknowledgment of Terms of Satisfaction Guarantee
I, Client, hereby understand if I am unsatisfied with the services rendered despite my active participation I may not be entitled to a refund of fees. I, Client am aware that I cannot process any charge back against 365 Credit Clinic. I also acknowledge all service fees paid to 365 Credit Clinic are non-refundable. If I am unsatisfied with the service performed, I agree to cancel service without providing cancellation documentation to 365 Credit Clinic.

IN WITNESS WHEREOF, the parties have caused this Agreement to become effective as

** ALL SERVICES RENDERED AT THE OFFICE OF 365 CREDIT CLINIC IS A MONTH TO MONTH SERVICE AND MAY CANCEL SERVICES AT ANY GIVEN TIME WITHOUT ANY PENALTY FEES  **
 
YOU MAY CANCEL THIS CONTRACT WITHOUT PENALTY OR OBLIGATION AT ANY TIME BEFORE MIDNIGHT OF THE THIRD BUSINESS DAY AFTER THE DATE ON WHICH YOU SIGNED THE CONTRACT. SEE THE ATTACHED NOTICE OF CANCELLATION FORM FOR AN EXPLANATION OF THIS RIGHT.`
  },
  {
    // title: 'Power Of Attorney',
    content: `Power Of Attorney 
I, [Your Full Legal Name], residing at [Your Address], hereby appoint, constitute, and designate 365 Credit Clinic LLC,  and their authorized representatives, collectively referred to as my attorney-in-fact, with full power and authority to act on my behalf in matters pertaining to credit reporting agencies, creditors, and debt collection agencies. This Power of Attorney is granted for the exclusive purpose of managing and resolving credit-related issues, as described herein.

Communication with Credit Reporting Agencies and Creditors: My attorney-in-fact is authorized to initiate and respond to communications directed towards credit reporting agencies, creditors, and debt collection agencies on my behalf. This includes but is not limited to making inquiries, requesting credit-related information, disputing inaccuracies, and addressing any issues concerning my credit profile.`
  },
  {
    // title: 'NOTICE OF CANCELLATION',
    content: `NOTICE OF CANCELLATION
You may cancel this contract, without any penalty or obligation, at any time before midnight on the third day which begins after the date the contract is signed by you.

If for any reason, you cancel the Agreement with the credit services organization within the three days from the date you signed the Agreement, you do not owe any money and are entitled to a full and complete refund of any monies paid.

If you cancel any payment made by you under this Agreement, it will be returned within 10 days following receipt by the credit service organization of your cancellation notice

To cancel this Agreement, mail or deliver a signed dated copy of this cancellation notice, or any other written notice to:

365 Credit Clinic, LLC at 12150 SW 128th Court, Suite #230  Miami, FL 33186
or geosuris@outlook.com, before midnight on ________________, 20__.

 

I hereby cancel this transaction ________________, 20__.

 

 

Client Signature: ____________

Client (Print Name): ___________

Date: ___________`
  }
];

export default function CreditRepairForm() {
  const [checkedState, setCheckedState] = useState(new Array(agreementSections.length).fill(false));

  const handleCheckboxChange = (index) => {
    const updatedCheckedState = checkedState.map((item, i) =>
      i === index ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const allChecked = checkedState.every(Boolean);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6">
      <Head>
        <title>Credit Repair Service Agreement</title>
        <meta name="description" content="Credit repair service agreement form" />
      </Head>

      <h4 className="text-2xl font-semibold text-gray-700 py-4 border-b border-gray-200">
        Credit Repair Service Agreement
      </h4>

      {agreementSections.map((section, index) => (
        <div key={index} className="my-6">
          <h5 className="text-xl font-semibold text-gray-800">{section.title}</h5>
          <label className="flex items-start space-x-2 text-gray-800">
            <input 
              type="checkbox" 
              className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded"
              checked={checkedState[index]}
              onChange={() => handleCheckboxChange(index)}
            />
            <span>By clicking the submit button, I agree to terms & conditions. <span className="text-red-500">*</span></span>
          </label>
          <div className="my-6 w-full h-40 p-2 border border-gray-300 rounded bg-white overflow-y-auto scrollbar-hidden hover:scrollbar-show">
  <p className="text-gray-800">{section.content}</p>
</div>

        </div>
      ))}

      <ApplicationForm />
      <AppointmentScheduler />

      <div className="mt-8 mb-4 text-center">
        <button 
          className={`px-16 py-4 text-white font-medium rounded ${allChecked ? 'bg-green-600 hover:bg-green-700' : 'bg-green-300 cursor-not-allowed'}`}
          disabled={!allChecked}
        >
          Submit
        </button>
        <p>Powerted by:<b>Jotform</b></p>
      </div>
    </div>
  );
}
