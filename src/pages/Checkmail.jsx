import { saveAs } from 'file-saver'
import { db } from '../firebase'
import { axios } from 'axios';
import React, { useState, useEffect } from "react";
import Input from "../components/input";
import Button from "../components/button";
import certificate from '../assets/certificate.jpg';
import { doc, updateDoc, deleteDoc, collection} from "firebase/firestore";
import { Page, Text, View, Document, StyleSheet, pdf, Image} from '@react-pdf/renderer';



const Checkmail = ({ emails, verify, email}) => {
  const message = "Oops. Email not registered, go back?";
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [isDownload, setIsDownload] = useState(false);
  const [isClicked, setIsClicked] = useState(false);



  const check = 500/name?.length  > 24
  const styles = StyleSheet.create({
  page: {

  },
  section: {

    },
    image: {
      width: "100%",
      height: `${check ? '125%': '125%'}`,
    },
    text: {
      fontFamily: 'Courier',
      fontStyle: 'normal',
      fontSize: `${ check ? '32px':'16px'}`,
      marginTop: `${check ? '-32.5%': '-30.5%'}`,
      marginLeft: '28.5%',
      width: `500px`,
      textAlign: 'center',
    }
  });

  useEffect(() => {
    const findData = emails?.filter(i => i.email.stringValue === email)[0]
      setIsDownload(findData?.download?.booleanValue ?? false)
    setName(findData?.name?.stringValue ?? '')
  }, [])
  
  const MyDoc = () => (
  <Document>
    <Page size="A4" style={styles.page} orientation="landscape" wrap={false}>
      <View>
          <Image src={certificate} style={styles.image} />
          <Text style={styles.text} fixed={true}>{name}</Text>
        </View>
    </Page>
  </Document>
);

  const btnData = {
    actionType: "Download",
    styles:
      "bg-blue-400 px-4 py-2 text-white rounded-sm font-semibold hover:bg-opacity-90 w-full md:w-1/2",
    handleClick: async (e) => {
      e.preventDefault();
   
      const updatedEmails = emails.map(i => {
        if (i.email.stringValue === email) {
          return {
            email: email, download: true, name: name
          }
        }
        else {
          {
            return {
              email: i.email.stringValue, download: false, name: ''
            }
          }
        }
      }
      )
      const taskDocRef = doc(db, 'emails/emailAddress')
      try {
          const blob = await pdf(
        <MyDoc />
    ).toBlob();
        saveAs(blob, 'certificate.pdf');
     await updateDoc(taskDocRef, 
       {
         address: updatedEmails
       }
      
        )
//         axios({
//     method: 'post',
//     url: `${mailgun.baseUrl}/${mailgun.domain}/messages`,
//     auth: {
//         username: 'api',
//         password: mailgun.apiKey
//     },
//     params: {
//         from: 'Cowlsonwc@gmail.com',
//         to: email,
//         subject: 'Hello',
//       text: 'Cowlso Certificate',
//         attachments: []
//     }
// }).then(
//     response => {
//         console.log(response)
//     },
//     reject => {
//         console.log(reject)
//     }
// )

       setIsDownload(true)
    } catch (err) {
      alert("Please retry")
      console.log(err)
    }
   
    },
  };

  const btnSubmitName = {
    actionType: "Submit",
    styles:
      "bg-blue-400 px-4 py-2 text-white rounded-sm font-semibold hover:bg-opacity-90 w-full md:w-1/2",
    handleClick: (e) => {
      if (value) {
        if (confirm("Kindly confirm that you have inputted the correct info. Please note that you cannot modify after confirming your input.")) {
         setName(value)
        setIsClicked(!isClicked);
       }
        else {
          e.preventDefault()
       }
      }
      else {
        e.preventDefault()
        alert("Please enter your name");
      }
    },
  };

  const data = {
    styles:
      "ring-1 ring-blue-400 focus:outline-none focus:ring-1 focus:ring-black px-4 py-2 rounded-sm mb-4 w-full md:w-1/2",
    placeholder: "Enter your full name",
    htmlFor: "full-name",
    type: "text",
    value: value,
    handleKeyDown: (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
      }
    },
    handleChange: (e) => {
      setValue(e.target.value);
    },
  };

  const Notfound = ({ message }) => {
    return (
      <>
        <h2 className="text-4xl md:text-5xl font-semibold px-4 text-center mt-24">
          {message}
        </h2>
      </>
    );
  };

  const inputName = () => {
    return (
      <>
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 px-4 text-center">
          Enter Name
        </h2>
        <p className="text-center text-lg mb-4 px-4">
          Please note this is how it will appear on the certificate and should
          be crosschecked.
        </p>
        <form className="w-screen text-center px-4 md:pd-0">
          <Input {...data} />
          <Button {...btnSubmitName} />
        </form>
      </>
    );
  };

  const HasDownload = () => {
    return (
      <>
         <div className="container max-auto h-auto grid place-items-center items-center mt-48">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 px-4 text-center">
          You have already generated a certificate.
        </h2>
        <p className="text-center text-lg mb-4 px-4">Download again here</p>
        <form className="w-screen text-center px-4 md:pd-0">
          <Button {...btnData} />
          </form>
          </div>
      </>
    );
  };

  const DownloadCert = () => {
    return (
      <>
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 px-4">
          Download Certificate here.
        </h2>
        <form className="w-screen text-center px-4 md:pd-0">
          <Button {...btnData} />
        </form>
      </>
    );
  };

  return (
    <>
      {isDownload ? (
       <HasDownload/>
      ) : (
        <div className="container max-auto h-auto grid place-items-center items-center mt-48">
            {verify ? (
            isClicked ? (
              <DownloadCert />
            ) : (
              inputName()
            )
          ) : (
            <Notfound message={message} />
          )}
        </div>
      )}
    </>
  );
};

export default Checkmail;
