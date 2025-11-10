
    const orderBtn = document.getElementById("orderBtn");
    const feedbackForm = document.getElementById("feedbackForm");
    const submitBtn = document.getElementById("submitFeedback");
    const feedbackContainer = document.getElementById("feedbackContainer");

    // Load saved feedbacks
    window.addEventListener("load", () => {
      const saved = JSON.parse(localStorage.getItem("appaFeedbacks")) || [];
      saved.forEach(item => addFeedbackToUI(item.name, item.comment));
    });

    orderBtn.addEventListener("click", () => {
      feedbackForm.style.display = "block";
      window.scrollTo({ top: feedbackForm.offsetTop, behavior: "smooth" });
    });

    submitBtn.addEventListener("click", () => {
      const name = document.getElementById("name").value.trim();
      const comment = document.getElementById("comment").value.trim();

      if (!name || !comment) {
        alert("कृपया नाव आणि फीडबॅक दोन्ही भरा 🙂");
        return;
      }

      addFeedbackToUI(name, comment);
      saveFeedback(name, comment);
      document.getElementById("name").value = "";
      document.getElementById("comment").value = "";
      feedbackForm.style.display = "none";
      alert("आपल्या फीडबॅक बद्दल धन्यवाद ☕❤");
    });

    function addFeedbackToUI(name, comment) {
      const div = document.createElement("div");
      div.classList.add("feedback-item");
      div.innerHTML = `<strong>${name}</strong><br>${comment}`;
      feedbackContainer.appendChild(div);
    }

    function saveFeedback(name, comment) {
      const existing = JSON.parse(localStorage.getItem("appaFeedbacks")) || [];
      existing.push({ name, comment });
      localStorage.setItem("appaFeedbacks", JSON.stringify(existing));
    }
	
		