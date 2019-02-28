export default function addPeople(firstname, lastname) {
  return {
    type: "ADD_PEOPLE",
    payload: {
      firstname,
      lastname
    }
  };
}

export function captureEvent(captureletter) {
  return {
    type: "ADD_EVENT",
    payload: captureletter
  };
}

