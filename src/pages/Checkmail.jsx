import { saveAs } from 'file-saver'
import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";
import { Page, Text, View, Document, StyleSheet, pdf, Image, Font} from '@react-pdf/renderer';



const Checkmail = ({ email, verify }) => {
  const message = "Oops. Email not registered, go back?";
  const [value, setValue] = useState("");
  const [name, setName] = useState("AdeSumnola Omotola Ebikefe");
  const [isDownload, setIsDownload] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

 
  // const getDownload = () => {
  //   if (localStorage.getItem(email)) {
  //     return true;
  //   }
  // };
// Font.register({ family: 'Courier', src: source });

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
      fontSize: `${ check ? '24px':'16px'}`,
      marginTop: `${check ? '-31.8%': '-30.5%'}`,
      marginLeft: '28.5%',
      width: `500px`,
      textAlign: 'center',
    }
  });
  
  const MyDoc = () => (
  <Document>
    <Page size="A4" style={styles.page} orientation="landscape" wrap={false}>
      <View>
          <Image src="../src/assets/certificate.jpg" style={styles.image} />
          <Text style={styles.text} fixed={true}>AdeSumnola Omotola Ebikefe</Text>
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
      // if (!localStorage.getItem(email)) {
      //   localStorage.setItem(email, value);
      // }
       const blob = await pdf(
        <MyDoc />
    ).toBlob();
    saveAs(blob, 'wycena.pdf');
      setIsDownload(!isDownload);
    },
  };

  const btnSubmitName = {
    actionType: "Submit",
    styles:
      "bg-blue-400 px-4 py-2 text-white rounded-sm font-semibold hover:bg-opacity-90 w-full md:w-1/2",
    handleClick: (e) => {
      if (value) {
        alert("Are you sure the detail is correct?");
        //set item in local storage when download is clicked-remove from input func
        // localStorage.setItem("name", value)
        setIsClicked(!isClicked);
      }
      //verify input value
      else {
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
    // if (localStorage.getItem(email)) {
    //   setName(localStorage.getItem(email));
    // }
    return (
      <>
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 px-4 text-center">
          You have already generated a certificate.
        </h2>
        <p className="text-center text-lg mb-4 px-4">Download again here</p>
        <form className="w-screen text-center px-4 md:pd-0">
          <Button {...btnData} />
        </form>
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
           {/* <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download Document'
      }
    </PDFDownloadLink> */}
          <Button {...btnData} />
        </form>
      </>
    );
  };

  return (
    <>
      {isDownload ? (
        <div className="container relative bg-red-400 h-screen w-screen">
          <img
            src="../src/assets/certificate.jpg"
            alt="certificate"
            className="object-contain w-screen h-screen"

          />
          <div className="text-center absolute top-1/2 left-1/3">
            {name || value}
          </div>
        </div>
      ) : (
        <div className="container max-auto h-auto grid place-items-center items-center mt-48">
          {/* {verify ? (
            getDownload() ? (
              <HasDownload />
            ) : isClicked ? (
              <DownloadCert />
            ) : (
              //called as a function to prevent rerendering of input and loosing focus
              inputName()
            )
          ) : (
            <Notfound message={message} />
          )} */}
            {verify ? (
            isClicked ? (
              <DownloadCert />
            ) : (
              //called as a function to prevent rerendering of input and loosing focus
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
