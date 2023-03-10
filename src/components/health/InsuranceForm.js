import React from 'react';

const InsuranceForm = () =>{
	return(
		<div>
			<h2>Wakandan Health Insurance Application Form</h2>
		<form>
			<h4>Personal Information:</h4>
			<label>Full Name:</label>
			<input type='text' name='name' placeholder='eg. John Snow' />

			<label>Date of birth:</label>
			<input type='date' name='dob' placeholder='eg. 23/09/1960' />

			<label>Gender:</label>
			<input type='radio'name='gender' />
			<label>Male</label>
			<input type='radio' name='gender'/>
			<label>Female</label>
			

			<label>Address:</label>
			<input type='text' name='address' placeholder='eg. 123 street' />

			<label>Phone Number:</label>
			<input type='text' name='phone' placeholder='eg. 11 22346743' />

			<label>Email:</label>
			<input type='email' name='email' placeholder='eg. johnsnow@kandamail.com' />

			<h4>Employment Information:</h4>
			<label>Employer:</label>
			<input type='text' name='employer' placeholder='eg. Revenue Authority' />

			<label>Occupation:</label>
			<input type='text' name='occupation' placeholder='eg. clerk' />

			<label>Annual income:</label>
			<input type='text' name='income' placeholder='eg. Wsh 12.000' />

			<h4>Coverage Information:</h4>
			<label>Type of Coverage:</label>

			<input type='radio' name='coverage type' />
			<label>HEALTH MAINTENANCE ORGANIZATION (HMO)</label>
			<p>With an HMO plan, you are given a list of doctors within a network (who either work directly for the HMO or contract with it) and pick a primary care physician to oversee all your care.</p>
			
			<input type='radio' name='coverage type' />
			<label>PREFERRED PROVIDER ORGANIZATION (PPO)</label>
			<p>For PPO plans, you have a list of pre-approved providers who contract with the plan, rather than providers who work directly for it.</p>
			
			<input type='radio' name='coverage type' />
			<label>A HEALTH SAVINGS ACCOUNT (HSA)</label>
			<p>The money you put into an HSA is contributed pre-tax, and if you use it to pay for qualified medical expenses, there’s also no tax on withdrawals.</p>

			<h4>Health Information</h4>

			<label>Do you have any pre-existing medical conditions?</label>

			<input type='radio' name='pre-existing' />
			<label>Yes</label>
			<input type='radio' name='pre-existing' />
			<label>No</label>

			<label>Have you had any surgeries in the past 5 years?</label>

			<input type='radio' name='surgeries' />
			<label>Yes</label>
			<input type='radio' name='surgeries' />
			<label>No</label>

			<label>Do you currently take any medications?</label>

			<input type='radio' name='medications' />
			<label>Yes</label>
			<input type='radio' name='medications' />
			<label>No</label>

			<label>Do you use tobacco products?</label>

			<input type='radio' name='tobacco' />
			<label>Yes</label>
			<input type='radio' name='tobacco' />
			<label>No</label>

			<label>Do you consume alcohol?</label>

			<input type='radio' name='alcohol' />
			<label>Yes</label>
			<input type='radio' name='alcohol' />
			<label>No</label>

			<label>Are you pregnant or planning to become pregnant in the next year?</label>
			<input type='radio' name='pregnant' />
			<label>Yes</label>
			<input type='radio' name='pregnant' />
			<label>No</label>

			<h4>Acknowledgement:</h4>

			<p>I acknowledge that the information provided in this application is true and accurate to the best of my knowledge. 
			I understand that any false statements or omissions may result in denial of coverage or cancellation of coverage.</p>

			<label>Signature</label>
			<input type='text'name='signature'placeholder='eg JohnSnow' />
			<label>Date:</label>
			<input type='date'name='date'placeholder='dd/mm/yyyy' />

			<button type='submit'>Submit</button>
		</form>

		</div>
		)
}

export default InsuranceForm;