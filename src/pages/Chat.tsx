import React, { useContext, useState, useEffect, useRef }  from 'react';
import {
	IonPage,
	IonContent,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonMenu,
	IonInput,
	IonList,
	IonItem,
	IonLabel,
	IonMenuToggle,
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonCardContent,
	IonModal,
	IonButton,
	IonMenuButton,
	IonGrid,
	IonRow,
	IonCardSubtitle,
	IonCol
} from '@ionic/react';
import logo from '../assets/logo.png';
import './Chat.css'
import { getJobsPosted, getJobsApplied, getJobApplicants, getUserProfile } from "../components/CrudOperations";
// import Chat from "./Chat";

import { User } from '../typeInterfaces'
import UserDataContext from '../components/UserDataContext';
import { Job } from '../components/CrudOperations';

import { database } from "../firebaseConfig";

interface ChatProps {
	currentUserId: string;
	otherUserId: string;
}

const Chat: React.FC<ChatProps> = ({ currentUserId, otherUserId }) => {
	const [messages, setMessages] = useState<any[]>([]);
	const [newMessage, setNewMessage] = useState("");
	const chatEndRef = useRef<any>(null);
  
	useEffect(() => {
	  loadMessages();
	}, []);
  
	const loadMessages = () => {
		const messagesRef = database.ref("messages");
	  
		messagesRef
		  .orderByChild("timestamp")
		  .on("value", (snapshot) => {
			const loadedMessages = Object.entries(snapshot.val() || {}).map(([id, data]: [string, any]) => ({
			  id,
			  ...data,
			}));
	  
			setMessages(loadedMessages);
			scrollToBottom();
		  });
	  
		return () => messagesRef.off();
	  };
  
	const scrollToBottom = () => {
	  chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};
  
	const sendMessage = async () => {
	  if (newMessage.trim().length === 0) return;
  
	  const message = {
		content: newMessage.trim(),
		sender: currentUserId,
		members: [currentUserId, otherUserId],
		timestamp: new Date().toISOString(),
	  };
  
	  await database.ref("messages").push(message);
	  setNewMessage("");
	};
  
	const renderMessage = (message: any, isSender: boolean) => (
	  <IonItem key={message.id} lines="none" className={isSender ? "sender" : "receiver"}>
		<IonLabel className={isSender ? "ion-text-wrap bgcolora" : "ion-text-wrap bgcolorb"}>
		  <p>{message.content}</p>
		</IonLabel>
	  </IonItem>
	);
  
	return (
	  <IonContent>
		<IonList>
		  {messages.map((message) =>
			message.members.every((userId: string) => userId === currentUserId || userId === otherUserId)
			  ? renderMessage(message, message.sender === currentUserId)
			  : null
		  )}
		  <div ref={chatEndRef} />
		</IonList>
		<div className="input-container">
		  <IonInput className='textbg'
			value={newMessage}
			onIonChange={(e) => setNewMessage(e.detail.value!)}
			placeholder="Type a message"
		  />
		  <IonButton className='custom-button' onClick={sendMessage} expand="block">
			Send
		  </IonButton>
		</div>
	  </IonContent>
	);
};
  
export default Chat;