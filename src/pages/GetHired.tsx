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
    IonDatetime,
    IonCardTitle
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


    useEffect(() => {
      // Fetch data from the `Jobs` collection using Realm AppServices
      async function fetchJobs() {
        const fetchedJobs: Job[] = await listAllJobOffers(); // Replace with your function that fetches jobs data
        setJobs(fetchedJobs);
      }
  
      fetchJobs();
    }, []);

    const handleCardClick = (job: Job) => {
      setSelectedJob(job);
      setShowModal(true);
    };

    const handleApply = () => {
      // Implement your apply for job logic here
      console.log(`Applying for job: ${selectedJob?.projectName}`);
      setShowModal(false);
    };

    // };

    return (
      <IonPage>
        <IonContent>
          {jobs.map((job) => (
            <IonCard key={job.projectName} onClick={() => handleCardClick(job)}>
              <IonCardHeader>
                <IonCardSubtitle>{/* Add subtitle if needed */}</IonCardSubtitle>
                <IonCardTitle>{job.projectName}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {job.details}
                {/* Display other fields as needed */}
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
                    <IonCardSubtitle>{/* Add subtitle if needed */}</IonCardSubtitle>
                    <IonCardTitle className='title'>{selectedJob.projectName}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <h1>Details</h1>
                    <p>{selectedJob.details}</p>
                    <h1>Roles needed</h1>
                    <p>{selectedJob.position}</p>
                    <h1>Budget</h1>
                    <p>{selectedJob.budget}</p>
                    <h1>Location</h1>
                    <p>{selectedJob.location}</p>
                    <h1>Production Dates:</h1>
                    <p>Start Date: {new Date(selectedJob.startDate!).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p>End Date: {new Date(selectedJob.endDate!).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </IonCardContent>
                </IonCard>
                <IonButton expand="block" onClick={handleApply}>
                  Apply
                </IonButton>
                <IonButton expand="block" fill="outline" onClick={() => setShowModal(false)}>
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