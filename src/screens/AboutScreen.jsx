import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import Icon from "react-native-vector-icons/Feather";

const AboutScreen = ({ navigation }) => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const toggleShowPass = () => setShowPass(!showPass);
  const toggleShowConfirmPass = () => setShowConfirmPass(!showConfirmPass);

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const showToast = (type, message) => {
    Toast.show({
      type: type,
      text1: message,
    });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = () => {
    const { name, email, phone, address, password, confirmPassword } = formData;

    if (!name || !email || !phone || !address || !password || !confirmPassword) {
      showToast("error", "Please fill all fields.");
      return;
    }

    if (name.length < 4) {
      showToast("error", "Name must be at least 4 characters.");
      return;
    }

    if (!validateEmail(email)) {
      showToast("error", "Please enter a valid email.");
      return;
    }

    if (!validatePhone(phone)) {
      showToast("error", "Please enter a valid phone number.");
      return;
    }

    if (password.length < 6) {
      showToast("error", "Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      showToast("error", "Passwords do not match.");
      return;
    }

    showToast("success", "Form submitted successfully!");

    navigation.navigate("Detail", { data: formData });

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registration Form</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={formData.name}
        onChangeText={(value) => handleInputChange("name", value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => handleInputChange("email", value)}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={formData.phone}
        onChangeText={(value) => handleInputChange("phone", value)}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Address"
        value={formData.address}
        onChangeText={(value) => handleInputChange("address", value)}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={formData.password}
          onChangeText={(value) => handleInputChange("password", value)}
          secureTextEntry={!showPass}
        />
        <TouchableOpacity onPress={toggleShowPass} style={styles.eyeIcon}>
          <Icon name={showPass ? "eye" : "eye-off"} size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChangeText={(value) => handleInputChange("confirmPassword", value)}
          secureTextEntry={!showConfirmPass}
        />
        <TouchableOpacity
          onPress={toggleShowConfirmPass}
          style={styles.eyeIcon}
        >
          <Icon name={showConfirmPass ? "eye" : "eye-off"} size={24} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <Toast />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "white",
  },
  passwordContainer: {
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: 8,
    top: 12,
  },
  button: {
    backgroundColor: "#E91E63",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AboutScreen;
