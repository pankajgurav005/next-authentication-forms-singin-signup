import React, { useState , useContext} from "react";
import { useRouter } from 'next/navigation';
import {MyContext} from '../components/navigation/navbar'

const Signin = (props: { closeModal: React.MouseEventHandler<HTMLDivElement> | undefined; }) => {
  const router = useRouter();
  const { isModalOpen, setIsModalOpen } = useContext(MyContext);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response) {
        console.log('LOGED IN');
        console.log(response);
        router.push('/about');
        setIsModalOpen(false);
      } else {
        console.log('ERROR LOGED IN');
        console.log(response);
        setIsModalOpen(false);
      }
  };

  const handleclikck = () => {
    setIsModalOpen(false);
  }

  return(
    <div>
      <div style={Styles.popupContainer}>
        <div style={Styles.popupContent}>
          <div style={Styles.closebtn} onClick={props.closeModal}>X</div>
          <div onClick={handleclikck}>Close Model</div>
          <div>
            <h1 style={Styles.h1}>Login Form</h1>
            <form onSubmit={handleSubmit} style={Styles.formStyle}>
              <div style={Styles.fieldContainer}>
                <label style={Styles.inputLabel}>
                  <input style={Styles.inputStyle} type="text" name="email" value={formData.email} onChange={handleChange} />
                </label>
              </div>
              <div style={Styles.fieldContainer}>
                <label style={Styles.inputLabel}>
                  <input style={Styles.inputStyle} type="password" name="password" value={formData.password} onChange={handleChange} />
                </label>
              </div>
              <div style={Styles.fieldContainer}>
                <button style={Styles.submitBtn} type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const Styles = {
  popupContainer: {
    textAlign: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'fixed',
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  popupContent: {
    width: '30%',
    height: '40%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  formStyle: {
    padding: '32px'
  },

  h1: { 
    fontSize: '20px',
    fontWeight: '600'
  },

  closebtn: {
    fontSize: 12,
    backgroundColor: '#000',
    color: '#fff',
    display: 'inline-block',
    padding: 8,
    float: 'right',
    cursor: 'pointer',
    // borderRadius: '20px',
  },

  fieldContainer: {
    width: '100%',
    height: 50,
    marginBottom: 15,
    // border: '1px solid #e6e6e6'
  },

  inputLabel: {
    border: '1px solid #d6d6d6',
    height: '40px',
    display: 'block',
    // borderRadius: 4,
  },

  inputStyle: {
    width: '100%',
    height: '100%',
    paddingLeft: '20px'
  },

  submitBtn: {
    width: '100px',
    height: '40px',
    backgroundColor: '#000',
    borderRadius: 4,
    color: '#fff'
  }
}

export default Signin;
