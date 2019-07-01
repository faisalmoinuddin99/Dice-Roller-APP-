import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dice1: require("./src/images/dice1.png"),
      dice2: require("./src/images/dice1.png")
    };
  }

  getRandomeNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  newGetRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  playButtonPressed1 = () => {
    var rNumber = this.getRandomeNumber();
    switch (rNumber) {
      case 1:
        this.setState({ dice1: require("./src/images/dice1.png") });

        break;
      case 2:
        this.setState({ dice1: require("./src/images/dice2.png") });

        break;
      case 3:
        this.setState({ dice1: require("./src/images/dice3.png") });

        break;
      case 4:
        this.setState({ dice1: require("./src/images/dice4.png") });

        break;
      case 5:
        this.setState({ dice1: require("./src/images/dice5.png") });
      case 6:
        this.setState({ dice1: require("./src/images/dice6.png") });

        break;

      default:
        this.setState({ dice1: require("./src/images/dice1.png") });
        break;
    }
  };
  playButtonPressed2 = () => {
    var newRnumber = this.newGetRandomNumber();
    switch (newRnumber) {
      case 1:
        this.setState({ dice2: require("./src/images/dice1.png") });
        break;
      case 2:
        this.setState({ dice2: require("./src/images/dice2.png") });
        break;
      case 3:
        this.setState({ dice2: require("./src/images/dice3.png") });
        break;
      case 4:
        this.setState({ dice2: require("./src/images/dice4.png") });
        break;
      case 5:
        this.setState({ dice2: require("./src/images/dice5.png") });
        //   case 6:
        this.setState({ dice2: require("./src/images/dice6.png") });
        break;
      default:
        this.setState({ dice2: require("./src/images/dice1.png") });
        break;
    }
  };
  render() {
    return (
      <View style={[styles.container, { backgroundColor: "#45CE30" }]}>
        <View style={styles.childContainer}>
          <Image
            style={{
              width: 100,
              height: 100,
              marginRight: 20
            }}
            source={this.state.dice1}
          />
          <Image
            style={{ width: 100, height: 100 }}
            source={this.state.dice2}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            this.playButtonPressed1();
            this.playButtonPressed2();
          }}
        >
          <Text style={styles.textStyle}>Roll Dice!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  childContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  textStyle: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 5,
    borderColor: "#FFFFFF"
  }
});
