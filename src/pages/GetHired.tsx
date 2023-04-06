import React, { useState, useEffect } from 'react';
import {
		IonContent,
		IonButton,
		IonModal,
		IonPage,
		IonCard, 
		IonCardContent, 
		IonCardHeader, 
		IonCardSubtitle,
		IonCardTitle,
		IonSelect, 
		IonSelectOption,
		IonInput,
		IonGrid,
		IonRow,
		IonCol
	} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import './Hire.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import '../theme/variables.css';
import './GetHired.css'

/* Get job insert */
import { Job, listAllJobOffers } from '../components/CrudOperations';


const Hire: React.FC = () => {
		
		const [jobs, setJobs] = useState<Job[]>([]);
		const [showModal, setShowModal] = useState<boolean>(false);
		const [selectedJob, setSelectedJob] = useState<Job | null>(null);
		const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
		const [positionFilter, setPositionFilter] = useState<string[]>([]);
		// const [dateFilter, setDateFilter] = useState<string>('');
		const [searchQuery, setSearchQuery] = useState<string>('');


		useEffect(() => {
			// Fetch data from the `Jobs` collection using Realm AppServices
			async function fetchJobs() {
				const fetchedJobs: Job[] = await listAllJobOffers(); // Replace with your function that fetches jobs data
				setJobs(fetchedJobs);
			}
	
			fetchJobs();
		}, []);

		/* Search Filter*/
		useEffect(() => {
			const filterJobs = () => {
			  	const filtered = jobs.filter((job) => {
					const matchPosition = positionFilter.length === 0 || positionFilter.some((pos) => job.position.includes(pos));
					// const matchDate = !dateFilter || new Date(job.date) >= new Date(dateFilter);
					const searchTokens = searchQuery.trim().toLowerCase().split(/\s+/);
					const matchSearch = searchTokens.every((token) => {
						return job.details.toLowerCase().includes(token) ||
						job.projectName.toLowerCase().includes(token) ||
						job.location.toLowerCase().includes(token);
					});
			
					return matchPosition && matchSearch // && matchDate;
				});
		
			  setFilteredJobs(filtered);
			};
		
			filterJobs();
		}, [jobs, positionFilter, searchQuery]);

		const handleCardClick = (job: Job) => {
			setSelectedJob(job);
			setShowModal(true);
		};

		const handleApply = () => {
			// Implement your apply for job logic here
			console.log(`Applying for job: ${selectedJob?.projectName}`);
			setShowModal(false);
		};


		return (
			<IonPage>
				<IonContent>

					<div>
						<IonSelect className='ion-padding border' placeholder="Filter Job Positions" multiple={true} value={positionFilter} onIonChange={(e) => setPositionFilter(e.detail.value)}>
							{/* Replace the options with your actual job positions */}
							<IonSelectOption value="Director">Director</IonSelectOption>
							<IonSelectOption value="1st Assistant Director">1st Assistant Director</IonSelectOption>
							<IonSelectOption value="Director of Photography">Director of Photography</IonSelectOption>
							<IonSelectOption value="Camera Operator">Camera Operator</IonSelectOption>
							<IonSelectOption value="Videographer">Videographer</IonSelectOption>
							<IonSelectOption value="Steadicam Operator">Steadicam Operator</IonSelectOption>
							<IonSelectOption value="1st Assistant">1st Assistant</IonSelectOption>
							<IonSelectOption value="Camera">Camera</IonSelectOption>
							<IonSelectOption value="Sound Operator">Sound Operator</IonSelectOption>
							<IonSelectOption value="Sound Editor">Sound Editor</IonSelectOption>
							<IonSelectOption value="Foley Artist">Foley Artist</IonSelectOption>
							<IonSelectOption value="Key Grip">Key Grip</IonSelectOption>
							<IonSelectOption value="Gaffer">Gaffer</IonSelectOption>
							<IonSelectOption value="Best Boy Electric">Best Boy Electric</IonSelectOption>
							<IonSelectOption value="Best Boy Grip">Best Boy Grip</IonSelectOption>
							<IonSelectOption value="Photographer">Photographer</IonSelectOption>
							<IonSelectOption value="Photo Assistant">Photo Assistant</IonSelectOption>
							<IonSelectOption value="Digitech">Digitech</IonSelectOption>
							<IonSelectOption value="Producer">Producer</IonSelectOption>
							<IonSelectOption value="Production Assistant">Production Assistant</IonSelectOption>
							<IonSelectOption value="Production Coordinator">Production Coordinator</IonSelectOption>
							<IonSelectOption value="Wardrobe Stylist">Wardrobe Stylist</IonSelectOption>
							<IonSelectOption value="Make Up Artist">Make Up Artist</IonSelectOption>
							<IonSelectOption value="Hair Stylist">Hair Stylist</IonSelectOption>
							<IonSelectOption value="Art Director">Art Director</IonSelectOption>
							<IonSelectOption value="Prop Stylist">Prop Stylist</IonSelectOption>
							<IonSelectOption value="Video">Video</IonSelectOption>
							<IonSelectOption value="Editor">Editor</IonSelectOption>
							<IonSelectOption value="Colorist">Colorist</IonSelectOption>
							<IonSelectOption value="Sound Mixer">Sound Mixer</IonSelectOption>
						</IonSelect>

						<IonInput
							className='ion-padding border'
							value={searchQuery}
							placeholder="Search Jobs"
							onIonChange={(e) => setSearchQuery(e.detail.value!)}
						></IonInput>

						<IonGrid>
							<IonRow>
								<IonCol>
									<IonButton expand='full' className="custom-button" onClick={() => setSearchQuery('')}>Clear Search</IonButton>
								</IonCol>
								<IonCol>
									<IonButton expand='full' className="custom-button" onClick={() => setPositionFilter([])}>Clear Filters</IonButton>
								</IonCol>
							</IonRow>
						</IonGrid>
					</div>



					{filteredJobs.map((job) => (
						<IonCard key={job.projectName} onClick={() => handleCardClick(job)}>
							<IonCardHeader>
								<IonCardTitle className='titlea'>{job.projectName}</IonCardTitle>
								<IonCardSubtitle className='positions'>{job.position.join(' | ')}</IonCardSubtitle>
							</IonCardHeader>
							<IonCardContent className='firstCard'>
								{job.details.length > 100 ? job.details.slice(0, 100) + '...' : job.details}
							</IonCardContent>
						</IonCard>
					))}
				</IonContent>
				<IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
					<IonContent>
						{selectedJob && (
							<>
								<IonCard>
									<IonCardHeader>
										<IonCardTitle className='titleb'>{selectedJob.projectName}</IonCardTitle>
										<IonCardSubtitle>{/* Add subtitle if needed */}</IonCardSubtitle>
									</IonCardHeader>
									<IonCardContent>
										<h1>Details</h1>
										<p>{selectedJob.details}</p>
										<h1>Roles needed</h1>
										<p>{selectedJob.position.join(' | ')}</p>
										<h1>Budget</h1>
										<p>{selectedJob.budget}</p>
										<h1>Location</h1>
										<p>{selectedJob.location}</p>
										<h1>Production Dates:</h1>
										<p>Start Date: {new Date(selectedJob.startDate!).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
										<p>End Date: {new Date(selectedJob.endDate!).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
									</IonCardContent>
								</IonCard>
								<IonButton className="custom-button" expand="full" onClick={handleApply}>
									Apply
								</IonButton>
								<IonButton className="custom-button" expand="full" onClick={() => setShowModal(false)}>
									Close
								</IonButton>
							</>
						)}
					</IonContent>
				</IonModal>
			</IonPage>
		);
};

export default Hire;