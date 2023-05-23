export default function InputValidation() {
  function validateTextInput(input: string): boolean {
    const regex = /^[a-zA-Z0-9!?_\-~@#&*(),.'"\s]*$/;
    return regex.test(input);
  }

  // Only allow years from 1900 to 2099
  function validateNumberInput(input: string): boolean {
    const regex = /^(?:18|19|20)\d{2}$/;
    return regex.test(input);
  }

  function validateFocalLengthInput(input: string): boolean {
    const regex = /^$|^[1-9][0-9]*mm$/;
    return regex.test(input);
  }

  function validateApertureInput(input: string): boolean {
    const regex = /^$|^f\/\d+(?:\.\d+)?$/;
    return regex.test(input);
  }

  function validateShutterSpeedInput(input: string): boolean {
    const regex = /^$|^1\/(?!1s)[1-9][0-9]*s$|^[1-9][0-9]*\.[0-9]*[1-9]s$|^[1-9][0-9]*s$/;
    return regex.test(input);
  }

  function validateISOInput(input: string): boolean {
    const regex = /^$|^[1-9][0-9]*$/;
    return regex.test(input);
  }
}

