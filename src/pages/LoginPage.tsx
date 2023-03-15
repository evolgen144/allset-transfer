import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {
    IonContent,
    IonPage,
    IonInput,
    IonButton,
    IonLabel,
    IonItem,
    } from "@ionic/react";

type FormData = {
    email: string;
    username: string;
    };

const LoginPage: React.FC = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const history = useHistory();
    
    const onSubmit = (data: FormData) => {
        console.log("Login data:", data);
        history.push('/Hire')
      };

    return (
        <IonPage>
          <IonContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <IonItem>
                <IonLabel>Email:</IonLabel>
                <IonInput type="email" {...register("email")} />
              </IonItem>
              <IonItem>
                <IonLabel>Username:</IonLabel>
                <IonInput type="text" {...register("username")} />
              </IonItem>
              <IonButton expand="block" type="submit">
                Login
              </IonButton>
            </form>
          </IonContent>
        </IonPage>
      );
    };

export default LoginPage;