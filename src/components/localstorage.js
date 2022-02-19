export function downloadFromStorage() {
  let data = {
    template: "",
    generalDetails: {},
    profile: "",
    education: [],
    experience: [],
    skills: [],
  };

  if (!localStorage.getItem("resumeState")) {
    localStorage.setItem("resumeState", JSON.stringify(data));
    return data;
  } else {data = JSON.parse(localStorage.getItem("resumeState"));
    return data
}
}

export function updateStorage(newData) {
  localStorage.setItem("resumeState", JSON.stringify(newData));
}
