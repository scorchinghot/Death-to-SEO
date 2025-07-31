import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-card text-card-foreground rounded-lg shadow-lg">
        <ScrollArea className="h-[80vh]">
          <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-center mb-6">Terms of Service</h1>
            <p className="text-lg mb-4">Thank you for choosing Lindot!</p>
            <p className="mb-4">
              These Terms of Service ("Terms") govern your use of the Lindot website, including all educational content, tools, and resources (together, the "Services"). By accessing or using our Services, you agree to comply with these Terms. If you do not agree with these Terms, please refrain from using the Services.
            </p>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="about">
                <AccordionTrigger>About Us</AccordionTrigger>
                <AccordionContent>
                  Lindot is an online educational platform designed to make computer science accessible and understandable. Our mission is to help learners explore and grasp the key principles of computer science—from foundational logic to advanced concepts. To learn more about us, visit our About page.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="access">
                <AccordionTrigger>Access to the Services</AccordionTrigger>
                <AccordionContent>
                  <p><strong>Minimum Age:</strong> You must be at least 13 years old or meet the minimum age required by law in your jurisdiction to use our Services. If you're under 18, you must have permission from a parent or legal guardian. By using this service, you represent and warrant that you meet the minimum age requirement, or that you have obtained parental consent if you are under the age of majority in your jurisdiction.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="disclaimer">
                <AccordionTrigger>Disclaimer of Warranties</AccordionTrigger>
                <AccordionContent>
                  <p>OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, LINDOT AND OUR AFFILIATES MAKE NO WARRANTIES (EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE) WITH RESPECT TO THE SERVICES. THIS INCLUDES, BUT IS NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR THE QUALITY, COMPLETENESS, OR ACCURACY OF THE CONTENT. LINDOT DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF LOSS OR ALTERATION.</p>
                  <p>YOU ACCEPT AND AGREE THAT ANY USE OF OUR SERVICE IS AT YOUR SOLE RISK AND YOU WILL NOT RELY ON SERVICE AS A SOLE SOURCE OF TRUTH OR FACTUAL INFORMATION, OR AS A SUBSTITUTE FOR PROFESSIONAL ADVICE.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="liability">
                <AccordionTrigger>Limitation of Liability</AccordionTrigger>
                <AccordionContent>
                  <p>TO THE FULLEST EXTENT PERMITTED BY LAW, NEITHER LINDOT NOR OUR AFFILIATES WILL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, EVEN IF LINDOT HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
                  <p>PLEASE NOTE THAT SOME JURISDICTIONS DO NOT ALLOW THE DISCLAIMER OF CERTAIN WARRANTIES OR LIMITATIONS ON DAMAGES, SO SOME OF THESE TERMS MAY NOT APPLY TO YOU. IN SUCH CASE, THESE LIMITATIONS WILL APPLY TO THE MAXIMUM EXTENT PERMITTED UNDER YOUR LOCAL LAW.</p>
                  <p>As Lindot provides its Services free of charge, in no event shall Lindot's liability exceed the amount you paid to Lindot for the Services in the last 12 months, if any, paid by the user to Lindot for donations or affiliate purchases directly related to the content or services that caused the issue.</p>
                  <p>Lindot's website may contain links to or recommend third-party resources, websites, or content that are not operated or controlled by Lindot. By accessing these external links, you acknowledge and agree that Lindot is not responsible for any damages, losses, or adverse consequences that may result from your use of third-party content or services.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="Indemnity">
                <AccordionTrigger>Indemnity</AccordionTrigger>
                <AccordionContent>
                  <p>If you are a business or organization, to the extent permitted by law, you will indemnify and hold harmless us, our affiliates, and our personnel, from and against any costs, losses, liabilities, and expenses (including attorneys’ fees) from third party claims arising out of or relating to your use of the Services and Content or any violation of these Terms.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="user-rights">
                <AccordionTrigger>User Rights & Responsibilities</AccordionTrigger>
                <AccordionContent>
                  <p>Lindot believes that knowledge should be open and accessible. All the educational content on this website is free for you to use, share, and build upon in any way that you find useful. Lindot encourage you to use this information to help spread knowledge and further the field of computer science.</p>
                  <p>However, there are a few things to keep in mind:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Respect for Intellectual Property:</strong> You are free to reuse, reproduce, or adapt the content from Lindot without asking for permission, but ask that you provide appropriate attribution. While our content is open for use, Lindot's branding, logo, and unique features (such as the website design, interactive tools, and code) are protected by copyright and cannot be used without permission.</li>
                    <li><strong>External Content:</strong> The website may contain links to or recommend third-party resources. These external sites are not controlled by Lindot, and do not endorse or take responsibility for the content, accuracy, or availability of these third-party resources. When you access these links, you do so at your own risk.</li>
                    <li><strong>Educational Content & Qualifications:</strong> While Lindot provides educational content, Lindot does not offer certifications, degrees, or formal qualifications upon completion of any materials. If you are seeking formal recognition for your learning, Lindot recommend you pursue accredited institutions or professional certification programs.</li>
                    <li><strong>Content Modifications:</strong> Lindot reserves the right to update, modify, or discontinue any educational resources or learning paths at any time. Users are encouraged to check the website regularly for updates.</li>
                    <li><strong>Limited License:</strong> You are granted a limited, non-exclusive, non-transferable license to access and use the website and its content for personal, non-commercial purposes only. Any use of the website or content beyond what is expressly permitted in these Terms is prohibited.</li>
                    <li><strong>Content Accuracy:</strong> While Lindot strive to provide clear, accurate, and up-to-date information, Lindot makes no representations or warranties regarding the accuracy, completeness, or reliability of the content. All materials and resources are provided "as is" for educational purposes, and users are encouraged to verify the information independently. Lindot is not responsible for any errors, omissions, or damages resulting from the use of the site or reliance on its content.</li>
                    <li><strong>Informational Purposes Only:</strong> The content provided on Lindot, including topics like quantum computing, is for informational purposes only and should not be construed as professional advice (legal, financial, or technical) users shouldn't rely on the educational content as the sole source for making significant personal or professional decisions. For specific guidance on such topics, please consult relevant professionals. Lindot is not liable for any damages, losses, or inconveniences caused by your use of the website, educational content, or any third-party links provided on the site. You use the website and its linked resources at your own risk. Lindot makes no representations or warranties regarding the completeness, accuracy, or effectiveness of the educational materials provided. Users are solely responsible for their engagement with the educational content and resources. Lindot does not guarantee specific learning outcomes or results from using these resources.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="donations">
                <AccordionTrigger>Donations & Affiliate Links</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Donations:</strong> Lindot provides an option for voluntary donations through Ko-fi to support the website's maintenance and content creation. Donations are not required to access any educational content. Donations made via Ko-fi are non-refundable, and no additional privileges or services are provided in exchange for donations.</li>
                    <li><strong>Affiliate Links:</strong> Some links on Lindot may be affiliate links. If you click on these links and make a purchase, Lindot may earn a small commission at no extra cost to you. These commissions help us fund the site's ongoing operations and content development. Affiliate commissions do not influence the content or recommendations provided on the site.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="privacy">
                <AccordionTrigger>Privacy & Data Collection</AccordionTrigger>
                <AccordionContent>
                  <p>Lindot value your privacy and is committed to protecting your personal information.</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Email Collection:</strong> Lindot may collect your email address if you subscribe to our newsletter or submit an inquiry through our contact form. Lindot will use this information only for the purposes specified (e.g., sending newsletters or responding to inquiries).</li>
                    <li><strong>Data Use:</strong> Lindot do not sell or share your personal data with third parties, unless required by law. You can unsubscribe from our newsletter at any time, and your contact information will only be used for the purposes it was collected.</li>
                    <li><strong>California Consumer Privacy Act (CCPA) Notice:</strong> In accordance with the California Consumer Privacy Act (CCPA), California residents have the right to request information about the personal data Lindot collect, use, and share. To submit a request or if you have questions about your personal data, please contact us at contactlindot@gmail.com.</li>
                    <li><strong>Data Retention:</strong> Lindot retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to provide our services and comply with legal obligations. If you subscribe to our newsletter, your email address will be retained until you unsubscribe. Data submitted via our contact form is retained only until we respond to your inquiry, after which it is discarded.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cookies">
                <AccordionTrigger>Cookies & Tracking Technologies</AccordionTrigger>
                <AccordionContent>
                  <p>To enhance your experience, Lindot may use cookies and other tracking technologies to analyze site traffic, improve site functionality, and personalize content. By using this website, you consent to the use of cookies as described below.</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Types of Cookies We Use:</strong>
                      <ul className="list-circle pl-6 space-y-1">
                        <li>Essential Cookies: These are necessary for the operation of the website and enable basic functions such as session management and secure access.</li>
                        <li>Google Analytics Cookies: These cookies help us analyze site traffic and improve content and functionality. They do not collect personally identifiable information but track browsing patterns to optimize our site’s user experience.</li>
                        <li>Session Cookies: These cookies maintain session states and ensure the website functions correctly and are temporary cookies that are deleted once you close your browser. They help us maintain your session while you're navigating our site.</li>
                      </ul>
                    </li>
                    <li><strong>Cookie Consent:</strong> Lindot do not provide a cookie management system, but you can disable cookies through your browser settings. Please note that disabling cookies may affect some website features.</li>
                    <li><strong>Third-Party Cookies:</strong> Lindot does not use third-party cookies for advertising or tracking purposes, except for affiliate links to Amazon and are not responsible for cookies or data collection practices on third-party sites.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="copyright">
                <AccordionTrigger>Copyright Complaints</AccordionTrigger>
                <AccordionContent>
                  <p>If you believe that your intellectual property rights have been infringed, please send notice to contactlindot@gmail.com. Lindot may delete or disable content that violates these Terms or is alleged to be infringing and will terminate accounts of repeat infringers where appropriate.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dispute">
                <AccordionTrigger>Dispute Resolution</AccordionTrigger>
                <AccordionContent>
                  <p>YOU AND LINDOT AGREE TO THE FOLLOWING MANDATORY ARBITRATION AND CLASS ACTION WAIVER PROVISIONS. PLEASE READ THIS SECTION CAREFULLY AS IT AFFECTS YOUR LEGAL RIGHTS. BY AGREEING TO BINDING ARBITRATION, YOU WAIVE YOUR RIGHT TO LITIGATE DISPUTES IN COURT AND TO HAVE A JUDGE OR JURY DECIDE YOUR CASE.</p>
                  <p><strong>Generally:</strong> In an effort to resolve disputes efficiently and at a lower cost, you and Lindot agree that any claim, dispute, action, or proceeding arising from or related to your use of this website or these Terms of Service ("Dispute") will be resolved as follows:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Binding Arbitration:</strong> Any Dispute that cannot be resolved through informal communication or via email (contactlindot@gmail.com) within sixty (60) days or such other time period as you and Lindot may mutually agree shall be resolved exclusively through binding arbitration. This means you waive your right to go to court or participate in a class action. Instead, disputes will be decided by a neutral arbitrator whose decision will be final, except for limited rights of appeal under the applicable arbitration laws.</li>
                    <li><strong>Mandatory Arbitration:</strong> You and Lindot agree that any Dispute will be resolved through arbitration, regardless of when the claim arose, even if it predates these Terms. You may opt-out of this arbitration agreement within 30 days or accepting an update to these Terms by notifying us at contactlindot@gmail.com. If you opt-out, the previous arbitration terms will apply.</li>
                    <li><strong>Informal Dispute Resolution:</strong> Before either party initiates formal arbitration, both parties agree to attempt to resolve any Dispute informally. You agree to notify Lindot of any concerns through contactlindot@gmail.com. Lindot will attempt to address your concerns via email or other appropriate means. If the Dispute is not resolved within 60 days, either party may proceed to arbitration.</li>
                    <li><strong>Arbitration forum:</strong> If we are unable to resolve the Dispute, either of us may commence arbitration with National Arbitration and Mediation (“NAM”) under its Comprehensive Dispute Resolution Rules and Procedures and/or Supplemental Rules for Mass Arbitration Filings, as applicable. Lindot will not seek attorneys’ fees and costs in arbitration unless the arbitrator determines that your claim is frivolous. The activities described in these Terms involve interstate commerce and the Federal Arbitration Act will govern the interpretation and enforcement of these arbitration terms and any arbitration.</li>
                    <li><strong>Arbitration procedures:</strong> The arbitration will be conducted by videoconference if possible, but if the arbitrator determines a hearing should be conducted in person, the location will be mutually agreed upon, in the county where you reside, or as determined by the arbitrator, unless the batch arbitration process applies. The arbitration will be conducted by a sole arbitrator. The arbitrator will be either a retired judge or an attorney licensed to practice law in the state of California. The arbitrator will have exclusive authority to resolve any Dispute, except the state or federal courts of San Francisco, California have the authority to determine any Dispute about enforceability, validity of the class action waiver, or requests for public injunctive relief, as set out below. Any settlement offer amounts will not be disclosed to the arbitrator by either party until after the arbitrator determines the final award, if any. The arbitrator has the authority to grant motions dispositive of all or part of any Dispute.</li>
                    <li><strong>Exceptions to Arbitration:</strong> This arbitration requirement does not apply to (i) claims for small claims that can be heard in small claims court, or (ii) actions seeking injunctive relief to prevent unauthorized use of the website, intellectual property violations, or other forms of harm.</li>
                    <li><strong>CLASS AND JURY TRIAL WAIVERS:</strong> You and Lindot agree that Disputes must be brought on an individual basis only, and may not be brought as a plaintiff or class member in any purported class, consolidated, or representative proceeding. Class arbitrations, class actions, and representative actions are prohibited. Only individual relief is available. The parties agree to sever and litigate in court any request for public injunctive relief after completing arbitration for the underlying claim and all other claims. This does not prevent either party from participating in a class-wide settlement. You and Lindot knowingly and irrevocably waive any right to trial by jury in any action, proceeding, or counterclaim.</li>
                    <li><strong>Batch arbitration:</strong> If 25 or more claimants represented by the same or similar counsel file demands for arbitration raising substantially similar Disputes within 90 days of each other, then you and Lindot agree that NAM will administer them in batches of up to 50 claimants each (“Batch”), unless there are less than 50 claimants in total or after batching, which will comprise a single Batch. NAM will administer each Batch as a single consolidated arbitration with one arbitrator, one set of arbitration fees, and one hearing held by videoconference or in a location decided by the arbitrator for each Batch. If any part of this section is found to be invalid or unenforceable as to a particular claimant or Batch, it will be severed and arbitrated in individual proceedings.</li>
                  </ul>
                  <p><strong>Severability:</strong> If any part of these arbitration terms is found to be illegal or unenforceable, the remainder will remain in effect, except that if a finding of partial illegality or unenforceability would allow class arbitration, class action, or representative action, this entire dispute resolution section will be unenforceable in its entirety.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="general">
                <AccordionTrigger>General Terms</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Assignment:</strong> You may not assign, transfer, or sublicense any of your rights or obligations under these Terms without our prior written consent. Any such attempt will be void. Lindot may assign our rights or obligations under these Terms to any affiliate, subsidiary, or successor in interest of any business related to our Services, without notice to you.</li>
                    <li><strong>Changes to these Terms or our Services:</strong> As part of our ongoing commitment to improve our Services, Lindot may update these Terms or the Services from time to time. These updates may occur due to factors such as:
                      <ul>Changes in applicable laws or regulatory requirements.</ul>
                      <ul>Security or safety improvements.</ul>
                      <ul>Circumstances beyond our reasonable control.</ul>
                      <ul>Modifications made during the ordinary course of developing our Services.</ul>
                      <ul>Advances in technology.</ul>
                    </li>
                    <p>Lindot will provide at least 30 days' notice of any material changes to these Terms that may negatively impact you, via notification on the site. Other changes will become effective immediately upon posting to our website. If you do not agree to any changes, you must cease using our Services.</p>
                    <li><strong>Delay in Enforcing these Terms:</strong> Our failure to enforce any provision of these Terms does not waive our right to do so in the future. If any part of these Terms is found to be invalid or unenforceable, that provision will be enforced to the fullest extent permitted by law, and the remaining provisions will remain in full force and effect.</li>
                    <li><strong>Trade Controls:</strong> You agree to comply with all applicable trade laws, including sanctions and export control laws. Our Services may not be used in or for the benefit of any country or territory subject to a U.S. embargo, or by any individual or entity with whom dealings are prohibited under applicable trade laws. Additionally, you agree not to use the Services for any end use that is prohibited by applicable trade laws. You also agree that your input will not contain any material or information that would require a government license for release or export.</li>
                    <li><strong>Entire Agreement:</strong> These Terms, together with any additional terms that apply to specific Services, constitute the entire agreement between you and Lindot concerning the Services. They supersede any prior or contemporaneous agreements, whether written or oral, between you and Lindot regarding the subject matter of these Terms.</li>
                    <li><strong>Governing law:</strong> California law will govern these Terms except for its conflicts of laws principles. Except as provided in the dispute resolution section above, all claims arising out of or relating to these Terms will be brought exclusively in the federal or state courts of San Francisco, California.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
              <p>If you have any questions or concerns about these Terms of Service or need further clarification, please contact us at contactlindot@gmail.com.</p>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}