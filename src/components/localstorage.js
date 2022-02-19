export function downloadFromStorage() {
  let data = {
    template: "",
    generalDetails: {},
    profile: "",
    education: [],
    experience: [],
    skills: [],
    certifications: [],
  };

  if (!localStorage.getItem("resumeState")) {
    localStorage.setItem("resumeState", JSON.stringify(data));
    console.log("i updated data")
    return data;
  } else {data = JSON.parse(localStorage.getItem("resumeState"));
  console.log("all data downloaded")
  console.log(data.experience)
    return data
}
}

export function updateStorage(newData) {
  localStorage.setItem("resumeState", JSON.stringify(newData));
}
