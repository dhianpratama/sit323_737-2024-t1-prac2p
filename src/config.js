// All configurations from process.env will be stored here
// So all configurations will be centralized, instead of putting process.env everywhere

// Port number, default to 3000 if value from process.env is not given
export const PORT = process.env.PORT || 3000
