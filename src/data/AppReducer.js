export default function AppReducer(state, action) {
  switch (action.type) {
    case "edit":
      return state.map((item) =>
        item.id === action.id ? { ...item, name: action.newName } : item
      );
    case "rate":
      return state.map((item) =>
        item.id === action.id
          ? { ...item, rating: item.rating === 10 ? 0 : item.rating + 1 }
          : item
      );
    case "delete":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}

export const initialState = [
  { id: 1, name: "Ala", rating: 7 },
  { id: 2, name: "Ela", rating: 9 },
  { id: 3, name: "Karol", rating: 5 },
  { id: 4, name: "Ola", rating: 8 },
  { id: 5, name: "Monik", rating: 6 },
  { id: 6, name: "Robert", rating: 4 },
  { id: 7, name: "Ala", rating: 7 },
  { id: 8, name: "Ela", rating: 9 },
  { id: 9, name: "Karol", rating: 5 },
  { id: 10, name: "Ola", rating: 8 },
  { id: 11, name: "Monik", rating: 6 },
  { id: 12, name: "Robert", rating: 4 },
];
