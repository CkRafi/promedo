// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle")
const navMobile = document.getElementById("navMobile")

menuToggle.addEventListener("click", () => {
  navMobile.classList.toggle("active")
  menuToggle.classList.toggle("active")
})

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-mobile a").forEach((link) => {
  link.addEventListener("click", () => {
    navMobile.classList.remove("active")
    menuToggle.classList.remove("active")
  })
})

// FAQ Accordion
const faqButtons = document.querySelectorAll(".faq-button")

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const faqIndex = button.getAttribute("data-faq")
    const faqAnswer = document.getElementById(`faq-${faqIndex}`)
    const isActive = faqAnswer.classList.contains("active")

    // Close all other FAQs
    document.querySelectorAll(".faq-answer").forEach((answer) => {
      answer.classList.remove("active")
    })
    document.querySelectorAll(".faq-button").forEach((btn) => {
      btn.classList.remove("active")
    })

    // Toggle current FAQ
    if (!isActive) {
      faqAnswer.classList.add("active")
      button.classList.add("active")
    }
  })
})

// Form Submission
const joinForm = document.getElementById("joinForm")

if (joinForm) {
  joinForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = {
      fullName: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      phoneNumber: document.getElementById("phone").value,
      course: document.getElementById("course").value,
      message: document.getElementById("message").value,
    }

    console.log("Form submitted:", formData)
    alert("Thank you for submitting the form! Our team will contact you soon.")

    joinForm.reset()
  })
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear()

// Add scroll animation for cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

document.querySelectorAll(".card").forEach((card) => {
  card.style.opacity = "0"
  card.style.transform = "translateY(20px)"
  card.style.transition = "all 0.6s ease-out"
  observer.observe(card)
})
