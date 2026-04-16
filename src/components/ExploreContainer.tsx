import React, { useState } from 'react';
import { IonAlert, IonButton } from '@ionic/react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IonButton onClick={() => setIsOpen(true)}>Click Me</IonButton>
      <IonAlert
        isOpen={isOpen}
        message="ILOVEYOU<3"
        buttons={['PAG ILOVEYOUTOOPUD']}
        onDidDismiss={() => setIsOpen(false)}
      ></IonAlert>
    </>
  );
}
export default Example;