// Auto-generated file

// === QUESTION: group cities by country ===
const locations = [
    { country: "India", city: "Karnataka" },
    { country: "Pakistan", city: "Karachi" },
    { country: "India", city: "Delhi" },
    { country: "India", city: "Chennai" },
    { country: "India", city: "Hyderabad" },
    { country: "Pakistan", city: "Lahore" }
];

const citiesByCountry = locations.reduce((acc, loc) => {
    if (!acc[loc.country]) acc[loc.country] = [];
    acc[loc.country].push(loc.city);
    return acc;
}, {});
console.log(citiesByCountry);

