"use client";
import React, { useEffect, useState } from "react";
import AppLayout from "@src/components/AppLayout";
import { useSearchParams } from "next/navigation";
import { CompanyName } from "@constants";
import RefundPolicy from "./_components/RefundPolicy";
import DeliveryReturn from "./_components/DeliveryReturn";

const Page = () => {
	const searchParams = useSearchParams().toString();
	const search = searchParams.replace(/=$/, "");
	const [activeTab, setActiveTab] = useState<string>("termsOfUse");

	useEffect(() => {
		if (search === "terms-of-use") {
			setActiveTab("termsOfUse");
		} else if (search === "privacy-policy") {
			setActiveTab("privacyPolicy");
		} else if (search === "delivery-return") {
			setActiveTab("deliveryReturn");
		} else if (search === "refund-policy") {
			setActiveTab("refundPolicy");
		}
	}, [search]);

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<AppLayout>
			<main className='bg-white mx-auto mt-32 pb-24'>
				<section className='flex w-full flex-col items-center pt-8 xl:pt-16 gap-2 sm:gap-3 px-2 sm:px-8 md:px-16 text-center'>
					<h4 className='text-black text-base sm:text-xl font-semibold leading-[120%]'>
						Our Policies
					</h4>
					<h3 className='font-semibold text-xl sm:text-2xl md:text-3xl leading-[150%]'>
						International Trans Co Supply Limited Policies
					</h3>
					<span className='text-xs sm:text-sm xl:text-base leading-[150%] text-black/70 sm:max-w-3xl slg:max-w-2xl'>
						At International Trans Co Supply Limited, we pride ourselves on
						delivering quality general merchandise and reliable contract
						services while maintaining transparency and excellence in all our
						business relationships.
					</span>
					<div className='flex gap-2 mt-3 xl:mt-8 text-[10px] xs:text-xs sm:text-sm slg:text-base leading-[140%] bg-[#F5F5F5] p-1 rounded-md transition'>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "termsOfUse"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("termsOfUse")}
						>
							Terms of use
						</button>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "privacyPolicy"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("privacyPolicy")}
						>
							Privacy Policy
						</button>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "deliveryReturn"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("deliveryReturn")}
						>
							Delivery & Return
						</button>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "refundPolicy"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("refundPolicy")}
						>
							Refund Policy
						</button>
					</div>
				</section>

				<div className='flex mx-auto w-full mt-4 md:mt-8 text-base leading-[155%] px-2 sm:px-0 sm:max-w-xl slg:max-w-2xl pb-20'>
					{activeTab === "termsOfUse" && (
						<div id='termsOfUse' className='text-[#667085]'>
							<h4 className='text-base sm:text-xl xl:text-2xl font-semibold text-black capitalize'>
								Terms of Use - International Trans Co Supply Limited
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								By engaging International Trans Co Supply Limited for general
								merchandise supply or contract services, you agree to the
								following comprehensive terms and conditions:
							</p>

							<ul className='list-disc pl-5 mt-2 space-y-2 text-xs md:text-sm xl:text-base'>
								<li>
									<span className='font-medium'>Service Scope:</span>{" "}
									International Trans Co Supply Limited specializes in sourcing
									and supplying general merchandise across diverse categories
									and executing general contract services. Our services include
									procurement, logistics coordination, quality assurance, and
									contract project management.
								</li>
								<li>
									<span className='font-medium'>Contract Services:</span>{" "}
									General contract services include project planning, resource
									allocation, timeline management, and quality delivery. All
									contracts require detailed scope of work documentation,
									milestone definitions, and acceptance criteria before
									commencement.
								</li>
								<li>
									<span className='font-medium'>Merchandise Quality:</span> All
									general merchandise undergoes quality inspection before
									delivery. We source from verified suppliers and maintain
									quality standards appropriate to product categories.
									Merchandise specifications are provided with each order
									confirmation.
								</li>
								<li>
									<span className='font-medium'>Payment Terms:</span>{" "}
									Merchandise orders require 50% deposit with balance due on
									delivery. Contract services are billed according to agreed
									milestone schedules. Large orders over ₦1,000,000 may qualify
									for extended payment terms.
								</li>
								<li>
									<span className='font-medium'>Delivery & Logistics:</span> We
									coordinate delivery logistics for all merchandise orders
									including packaging, transportation, and final delivery.
									Contract services are performed at client location or
									designated sites with proper site access and safety
									compliance.
								</li>
								<li>
									<span className='font-medium'>Order Processing:</span>{" "}
									Merchandise orders are processed within 2-5 business days
									depending on item availability and sourcing requirements.
									Contract service projects begin within 7-14 days of contract
									execution and deposit payment.
								</li>
								<li>
									<span className='font-medium'>Custom Sourcing:</span> Special
									merchandise sourcing requests are evaluated for feasibility
									and cost-effectiveness. Custom sourcing may require extended
									lead times and additional sourcing fees. International
									sourcing available with import documentation handling.
								</li>
								<li>
									<span className='font-medium'>Contract Compliance:</span> All
									contract services comply with Nigerian construction and
									service standards. Required permits and certifications are
									obtained before project commencement. Environmental and safety
									regulations are strictly observed.
								</li>
								<li>
									<span className='font-medium'>Limitation of Liability:</span>{" "}
									Our liability is limited to contract value and merchandise
									cost. Force majeure events, supplier failures, and
									unforeseeable circumstances may affect delivery schedules.
									Insurance coverage maintained for all contract operations.
								</li>
							</ul>

							<p className='mt-4 leading-[1.8] text-xs md:text-sm xl:text-base'>
								<span className='font-medium'>Dispute Resolution:</span>{" "}
								Commercial disputes are resolved through negotiation first,
								followed by mediation if necessary. Arbitration under Nigerian
								commercial law applies for unresolved matters.
							</p>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								<span className='font-medium'>Terms Modification:</span> These
								terms may be updated with notice provided for ongoing contracts.
								New contracts incorporate current terms at execution date.
							</p>
						</div>
					)}

					{activeTab === "privacyPolicy" && (
						<div id='privacyPolicy' className='text-[#667085]'>
							<h4 className='text-sm sm:text-xl xl:text-2xl font-semibold text-black'>
								PRIVACY POLICY - INTERNATIONAL TRANS CO SUPPLY LIMITED
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								International Trans Co Supply Limited is committed to protecting
								the privacy of our clients and partners. This policy explains
								how we collect, use, and safeguard information in our general
								merchandise and contract services operations.
							</p>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								INFORMATION COLLECTION FOR BUSINESS OPERATIONS
							</h4>

							<ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-decimal pl-4'>
								<li>
									Business identification (company name, registration details,
									contact persons)
								</li>
								<li>
									Financial information (payment details, credit references,
									billing addresses)
								</li>
								<li>
									Project specifications and merchandise requirements for
									accurate fulfillment
								</li>
								<li>Delivery addresses and logistics coordination details</li>
								<li>
									Communication records for order tracking and project
									management
								</li>
								<li>Quality feedback and service evaluation data</li>
								<li>
									Vendor and supplier relationship information for sourcing
									optimization
								</li>
								<li>
									Regulatory compliance documentation for contract services
								</li>
							</ul>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								DATA USAGE IN OUR OPERATIONS
							</h4>

							<ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-disc pl-4'>
								<li>
									To fulfill merchandise orders and execute contract services
									effectively
								</li>
								<li>
									To coordinate logistics and ensure timely delivery of goods
									and services
								</li>
								<li>
									To maintain quality standards and customer satisfaction
									tracking
								</li>
								<li>
									To process payments and maintain accurate financial records
								</li>
								<li>
									To improve sourcing efficiency and supplier relationship
									management
								</li>
								<li>
									To comply with regulatory requirements for contract operations
								</li>
								<li>
									To communicate project updates and delivery notifications
								</li>
								<li>
									To develop long-term business relationships and repeat service
									optimization
								</li>
							</ul>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								COMMERCIAL DATA SECURITY
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								We implement robust security measures for all business data
								including secure document storage, encrypted communications for
								sensitive information, and restricted access to client data on a
								need-to-know basis. Financial information is processed through
								certified payment systems with PCI compliance. Physical
								documents are stored in secure facilities with controlled
								access.
							</p>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								THIRD PARTY RELATIONSHIPS
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								We work with verified suppliers, logistics partners, and
								subcontractors who agree to confidentiality requirements. Client
								information is shared only as necessary for service delivery.
								Supplier selection includes privacy and security assessment. All
								partners sign non-disclosure agreements protecting client data.
							</p>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								CLIENT RIGHTS & DATA MANAGEMENT
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								Clients have the right to access their business information,
								request corrections, and understand how their data supports our
								services. Project documentation can be provided upon request.
								Data retention follows commercial record-keeping requirements
								and contractual obligations. For privacy inquiries related to
								our business operations, contact privacy@intransco.com.ng.
							</p>
						</div>
					)}

					{activeTab === "deliveryReturn" && (
						<div id='deliveryReturn' className='text-[#667085]'>
							<h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
								DELIVERY & RETURN POLICY - INTERNATIONAL TRANS CO SUPPLY LIMITED
							</h3>

							<p className='text-xs md:text-sm xl:text-base mb-4'>
								International Trans Co Supply Limited ensures reliable delivery
								of general merchandise and professional execution of contract
								services with comprehensive quality assurance and customer
								satisfaction guarantees.
							</p>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									General Merchandise Delivery
								</h4>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									<div>
										<h5 className='font-medium text-xs md:text-sm mb-1'>
											Lagos Metro Delivery
										</h5>
										<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
											<li>
												Same-day delivery for in-stock items ordered before 1 PM
												- ₦8,000
											</li>
											<li>Next-day delivery standard rate - ₦5,000</li>
											<li>Free delivery for orders above ₦150,000</li>
											<li>
												Bulk delivery scheduling available for large orders
											</li>
										</ul>
									</div>
									<div>
										<h5 className='font-medium text-xs md:text-sm mb-1'>
											National Delivery
										</h5>
										<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
											<li>2-7 business days depending on destination</li>
											<li>
												Delivery costs: ₦10,000 - ₦25,000 based on location and
												size
											</li>
											<li>Free shipping for orders above ₦300,000</li>
											<li>Tracking provided for all interstate deliveries</li>
										</ul>
									</div>
								</div>
							</div>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Contract Services Delivery
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>
										Project timelines established during contract negotiation
										phase
									</li>
									<li>
										Milestone-based delivery schedule with progress reporting
									</li>
									<li>
										Site preparation coordination with client facility
										management
									</li>
									<li>
										Quality checkpoints at 25%, 50%, 75%, and 100% completion
									</li>
									<li>
										Final inspection and client acceptance process before
										project closure
									</li>
									<li>Post-completion support period of 30 days included</li>
								</ul>
							</div>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Quality Assurance & Inspection
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>Pre-delivery inspection for all merchandise orders</li>
									<li>Quality certificates provided for regulated products</li>
									<li>
										Contract work inspected by certified quality control team
									</li>
									<li>
										Customer walkthrough and approval process for project
										deliverables
									</li>
									<li>
										Photographic documentation provided for completed work
									</li>
									<li>
										Warranty documentation and maintenance guidelines included
									</li>
								</ul>
							</div>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Return & Exchange Policies
								</h4>
								<div className='space-y-3'>
									<div>
										<p className='font-medium text-xs md:text-sm'>
											Merchandise Returns:
										</p>
										<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
											<li>
												14-day return policy for unused merchandise in original
												packaging
											</li>
											<li>
												Defective items replaced at no cost within 30 days
											</li>
											<li>
												Custom-sourced items non-returnable unless defective
											</li>
											<li>
												Return shipping costs borne by customer unless item is
												faulty
											</li>
										</ul>
									</div>
									<div>
										<p className='font-medium text-xs md:text-sm'>
											Contract Service Guarantee:
										</p>
										<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
											<li>
												12-month warranty on all contract work and installations
											</li>
											<li>
												Free remedial work for defects within warranty period
											</li>
											<li>
												Performance guarantees specified in individual contracts
											</li>
											<li>
												Client satisfaction review process with corrective
												action plans
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className='mt-6 pt-4 border-t border-gray-200'>
								<h4 className='font-semibold text-xs md:text-sm xl:text-base mb-2'>
									Delivery & Service Contact
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>Operations: operations@intransco.com.ng</li>
									<li>Delivery Tracking: tracking@intransco.com.ng</li>
									<li>Phone: +234-801-234-5003</li>
									<li>Website: www.intransco.com.ng</li>
									<li>Emergency Contact: +234-901-234-5003 (24/7)</li>
								</ul>
							</div>
						</div>
					)}

					{activeTab === "refundPolicy" && (
						<div id='refundPolicy' className='text-[#667085]'>
							<h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
								REFUND POLICY - INTERNATIONAL TRANS CO SUPPLY LIMITED
							</h3>
							<p className='text-xs md:text-sm xl:text-base mb-4'>
								Effective Date: {new Date().toLocaleDateString("en-GB")}
							</p>

							<p className='text-xs md:text-sm xl:text-base mb-4'>
								At International Trans Co Supply Limited, we are committed to
								delivering quality general merchandise and contract services
								that meet our clients&apos; expectations. Our refund policy is
								designed to provide fair resolution while protecting both client
								and company interests.
							</p>

							<ul className='list-disc pl-5 space-y-3 leading-[1.8] text-xs md:text-sm xl:text-base'>
								<li>
									<span className='font-medium'>
										1. General Merchandise Refunds
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Full refund for defective or damaged merchandise within 30
											days
										</li>
										<li>
											Partial refund for items not meeting specified quality
											standards
										</li>
										<li>
											Wrong item delivery qualifies for full refund and
											replacement
										</li>
										<li>
											Unopened merchandise returnable within 14 days (less
											restocking fee)
										</li>
										<li>
											Custom-sourced items refundable only if supplier defaults
											or item is defective
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										2. Contract Services Refunds
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Prorated refunds for incomplete projects due to our
											non-performance
										</li>
										<li>
											Full refund if project cannot commence due to our
											inability to proceed
										</li>
										<li>
											Milestone-based refunds if work doesn&apos;t meet agreed
											specifications
										</li>
										<li>
											Client-initiated cancellations subject to work completed
											and costs incurred
										</li>
										<li>
											Force majeure events may limit refund obligations as per
											contract terms
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										3. Non-Refundable Items & Services
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Custom-manufactured or specially ordered merchandise
											(unless defective)
										</li>
										<li>Perishable goods and time-sensitive materials</li>
										<li>Contract services completed and accepted by client</li>
										<li>
											Third-party vendor costs already incurred on client&apos;s
											behalf
										</li>
										<li>Consultation fees and site assessment charges</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>4. Refund Request Process</span>
									<p className='mt-1'>To request a refund:</p>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>Email: refunds@intransco.com.ng</li>
										<li>Phone: +234-801-234-5003</li>
										<li>
											Provide original purchase order and payment documentation
										</li>
										<li>
											Include detailed explanation and supporting evidence
											(photos for defects)
										</li>
										<li>
											For contract services, submit formal notice with project
											documentation
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										5. Refund Assessment & Processing
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Merchandise refund requests reviewed within 2 business
											days
										</li>
										<li>
											Contract service refunds assessed within 5 business days
										</li>
										<li>
											Physical inspection may be required for defective
											merchandise claims
										</li>
										<li>
											Approved refunds processed within 10-14 business days
										</li>
										<li>
											Complex contract refunds may require extended evaluation
											period
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										6. Alternative Resolutions
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Merchandise replacement or exchange for equivalent value
											items
										</li>
										<li>
											Credit notes valid for 12 months for future purchases
										</li>
										<li>
											Contract service corrections or additional work to meet
											specifications
										</li>
										<li>
											Partial refunds with service credit for future projects
										</li>
										<li>
											Extended warranty or maintenance services as compensation
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										7. Large Order & Contract Protections
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Performance bonds available for contracts over ₦2,000,000
										</li>
										<li>
											Escrow payment options for high-value merchandise orders
										</li>
										<li>
											Insurance coverage for major contract projects included
										</li>
										<li>
											Third-party quality inspection services available upon
											request
										</li>
									</ul>
								</li>
							</ul>

							<div className='mt-6 pt-4 border-t border-gray-200'>
								<h4 className='font-semibold text-xs md:text-sm xl:text-base mb-2'>
									Contact Information
								</h4>
								<p className='text-xs md:text-sm xl:text-base'>
									For refund requests and dispute resolution:
								</p>
								<ul className='list-disc pl-5 mt-2 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>International Trans Co Supply Limited</li>
									<li>Email: refunds@intransco.com.ng</li>
									<li>Customer Service: service@intransco.com.ng</li>
									<li>Phone: +234-801-234-5003</li>
									<li>Website: www.intransco.com.ng</li>
								</ul>
							</div>
						</div>
					)}
				</div>
			</main>
		</AppLayout>
	);
};

export default Page;
