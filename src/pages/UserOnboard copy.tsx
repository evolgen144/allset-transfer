import React, { useState, useContext } from 'react';
import {
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonPage,
    IonIcon,
    IonLabel,
    IonTextarea,
    IonSelect,
    IonSelectOption
  } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import './UserOnboard.css';
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
/* All-Set config */
import { refresh } from 'ionicons/icons';


/* Get User Auth0 id */
import UserDataContext from '../components/UserDataContext';


/* Import User interface with Types */
import { ClientInfo, Reviews, PastWork, Bio, JobPost, Postings, User } from '../typeInterfaces'


/* Get User insert */
import { insertNewUser } from '../components/CrudOperations';

const UserOnboard: React.FC = () => {

    // const [ProjectName, setProjecttName] = useState<string>('');
    /* Get User Auth0 id */
    const auth0ident: string | undefined = useContext(UserDataContext)?.authID;

    /* Position lists */
    // const [selectedItems, setSelectedItems] = useState<string[]>([]);
    // const positions = ['Director', '1st Assistant Director', 'Director of Photography', 
    // 'Camera Operator', 'Videographer', 'Steadicam Operator', '1st Assistant', 'Camera', 
    // 'Sound Operator', 'Sound Editor', 'Foley Artist', 'Key Grip', 'Gaffer', 'Best Boy Electric',
    // 'Best Boy Grip', 'Photographer', 'Photo Assistant', 'Digitech', 'Producer', 'Production Assistant', 
    // 'Production Coordinator', 'Wardrobe Stylist', 'Make Up Artist', 'Hair Stylist', 'Art Director',
    // 'Prop Stylist', 'Video', 'Editor', 'Colorist', 'Sound Mixer'];

    /* Setting of other Job details */
    // const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
    // const [startDate, endDate] = dateRange;
    const [FirstName, setFirstName] = useState<string>('');
    const [LastName, setLastName] = useState<string>('');
    // const [Details, setDetails] = useState<string>('');
    
    /* Submission of form */
    const pressSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // console.log(ProjectName, selectedItems, Budget, Location, dateRange, Details);

        /* User posting Experiment */
        const clientInfo: ClientInfo = {
            firstName: 'Firstname Test',
            lastName: 'Lastname Test',
            email: 'test@test.com',
            location: 'test city'
          }
          
        const reviews: Reviews = {
            0: 'test review'
          }
          
        const pastWork: PastWork = {
            0: 'test pastwork'
          }
          
        const bio: Bio =  {
            about: 'about TEST',
            pastWork: pastWork,
            reviews: reviews
          }
          
        const jobPost: JobPost = {
            Title: 'test job',
            Date: 'test date',
            Description: 'test description'
        }

        const postings: Postings = {
            0: jobPost
        }
              
        const newUser: User = {
            // _id: {
            //   $oid: string;
            // };
            authID: auth0ident!,
            clientInfo: clientInfo,
            Position: 'test position',
            bio: bio,
            postings: postings
          }

        /* Posting of job */
        const success = insertNewUser(newUser);
        handleReset()

        // Insert success alert after job posted
        
        };


    const handleReset = (): void => {
    //   setProjecttName('');
    //   setSelectedItems([]);
    //   setBudget('');
    //   setLocation('');
    //   setDateRange([null, null]);
    //   setDetails('');
    };

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <form onSubmit={pressSubmit}>
                    {/* <IonItem>
                        <IonLabel position="floating">The project's name?</IonLabel>
                        <IonInput placeholder="Project Name" value={ProjectName} onIonChange={(e) => setProjecttName(e.detail.value!)} />
                    </IonItem>
                    <IonItem className="itemsHeight">
                        <IonSelect className="select-placeholder selectHeight" value={selectedItems} placeholder="The role or positions?" multiple onIonChange={(e) => setSelectedItems(e.detail.value as string[])}>
                        {positions.map((positions, index) => (
                            <IonSelectOption key={index} value={positions}>
                                {positions}
                            </IonSelectOption>
                        ))}
                        </IonSelect>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">The budget?</IonLabel>
                        <IonInput placeholder="Budget" value={Budget} onIonChange={(e) => setBudget(e.detail.value!)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">The project's location?</IonLabel>
                        <IonInput placeholder="Location" value={Location} onIonChange={(e) => setLocation(e.detail.value!)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">The details?</IonLabel>
                        <IonTextarea autoGrow={true} placeholder="Details" value={Details} onIonChange={(e) => setDetails(e.detail.value!)} />
                    </IonItem>
                    
                    <IonGrid>
                        <IonRow className='ion-padding'>
                        <DatePicker
                            selectsRange={true}
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(update) => {
                                setDateRange(update);
                            }}
                            isClearable={true}
                            placeholderText="The Date(s)?" 
                        />
                        </IonRow>
                        <IonRow>
                            <IonCol size='6'>
                                <IonButton expand='full' className="custom-button" type="submit">Submit</IonButton>
                            </IonCol>
                            <IonCol size='6'>
                                <IonButton expand='full' className="custom-button" type="button" onClick={handleReset}>
                                    <IonIcon icon={refresh} />
                                    Reset
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid> */}
                </form>
            </IonContent>
        </IonPage>
    )
};

export default UserOnboard;