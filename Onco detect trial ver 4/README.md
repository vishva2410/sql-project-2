<div align="center">
  <br />
  <h1>⬛ ONCORECTIN</h1>
  <p>
    <strong>AI Radiologist & Clinical Risk Assessment Platform</strong>
  </p>
  <br />
  <p>
    <a href="#about">About</a> •
    <a href="#features">Features</a> •
    <a href="#design-philosophy">Design Philosophy</a> •
    <a href="#installation">Installation</a> •
    <a href="#usage">Usage</a>
  </p>
  <br />
</div>

---

## 🔬 About Oncorectin

**Oncorectin** is a cutting-edge, informational web application functioning as an AI-assisted Radiologist. Designed with strict medical compliance in mind, the platform processes medical imagery (such as dermoscopy images, regular photos, brain MRIs, and breast mammograms) alongside patient symptoms to calculate malignancy probabilities. 

> [!IMPORTANT]
> **Medical Disclaimer:** This application is built for informational and educational purposes only. The AI output is probabilistic, not diagnostic. Oncorectin adheres strictly to informational guidelines and does not replace the diagnosis of a certified medical professional.

---

## ✨ Features

- **🧠 Three Specialized AI Models**
  - **Melanoma Screening:** Dermoscopy AI analysis for skin lesions.
  - **Brain Tumor MRI:** Detection models for glioblastoma and astrocytoma.
  - **Breast Mammography:** Analysis of CC and MLO view X-rays.
- **📊 Advanced Data Synthesis**
  - Combines visual anomaly confidence with patient-reported clinical symptoms.
  - Generates comprehensive, synthesized reports using a simulated Local Large Language Model (LLM).
- **🚨 Emergency Protocol Engine**
  - Dynamic risk stratification (Low, Moderate, High).
  - Triggers an immediate "Nearest Hospital" finder and emergency guidelines when severe malignancy risk is detected.
- **📈 Patient Portal Dashboard**
  - Track recent scan history.
  - Visualize overall patient risk trajectory with interactive charts.

---

## ⬛ Design Philosophy

Oncorectin utilizes a strictly controlled aesthetic to convey clinical precision, urgency, and focus:

- **Monochrome Foundation:** The interface is built on a pure black, white, and gray scale.
- **Zero Radius Architecture:** All elements feature strict `border-radius: 0` constraints, eliminating rounded, "friendly" web borders for a sharp, serious medical tone.
- **Targeted Color Utilization:** Color is deployed exclusively where necessary—such as within data visualization charts (blue/green/purple) or critical emergency warnings (crimson red) to immediately grab attention.
- **Subtle Micro-interactions:** Clean fade-ins and sharp hover states bring the platform to life without sacrificing its professional weight.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React)
- **Styling:** Vanilla CSS Custom Properties (Strict Monochrome UI System)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Data Visualization:** [Recharts](https://recharts.org/)

---

## 🚀 Installation & Setup

To run Oncorectin locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vishva2410/Online-Oncologist.git
   cd Online-Oncologist
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Access the platform:**
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 💻 Usage

1. **Dashboard:** Start at the Patient Portal to view historical risk data.
2. **Select a Scan:** Choose between Melanoma, Brain MRI, or Breast Mammography.
3. **Upload & Report:** Upload the relevant medical image imagery and type the observed clinical symptoms.
4. **Analyze:** Run the AI Assessment. The app will simulate inference latency and return a calculated probability percentage alongside the LLM's synthesized report.

---

<div align="center">
  <p>Built with precision for the future of clinical informatics.</p>
</div>
