# **Articles Display and User Interface**

## **Overview**
This project is a **React-based** web application designed to display articles from an API, showcasing their title, description, author, and other details such as publication date. It has a clean and modern UI built using **Tailwind CSS**, with responsive designs for mobile and desktop views.

Additionally, the app includes some custom UI components like a notification bar, a footer, and a mobile-friendly layout, ensuring an optimal user experience.

---

## **Features**
- **Article Display**: Fetch and display a list of articles with their title, description, author, and published date.
- **Mobile-First Design**: The UI adapts responsively across various screen sizes, especially mobile devices.
- **Optimized for Performance**: The components are designed to be efficient, ensuring fast page loads.
- **Interactive Links**: Each article has a link to read more on the original site.

---

## **Tech Stack**

### **Frontend**
- **React**: Used for building the user interface and managing the state of components.
- **Tailwind CSS**: A utility-first CSS framework used for styling the application with responsive layouts.
- **JavaScript**: The primary language for building the frontend.
- **Axios**: For making API requests to fetch articles.
- **React Router**: For managing routes within the application.
- **FontAwesome** (optional): For adding icons to the UI.

### **Backend**
- **No Backend**: The articles data is fetched from an external API (e.g., news API).

### **Tools**
- **VS Code**: Primary code editor used for development.
- **Git**: For version control.
- **GitHub**: For code hosting and collaboration.

---

## **Installation**

To set up the project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-repo/articles-display.git
    ```

2. **Navigate into the project folder**:
    ```bash
    cd articles-display
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Start the development server**:
    ```bash
    npm start
    ```

Now, open your browser and navigate to `http://localhost:3000/` to view the application.

---

## **Project Structure**

```plaintext
├── public/                     # Static files like images, icons, etc.
├── src/                        
│   ├── components/              # Reusable components (e.g., ArticleCard, Footer, Navbar)
│   ├── assets/                  # Images and other assets
│   ├── App.js                   # Main app component
│   ├── index.js                 # Entry point for React app
│   └── utils/                   # Helper functions for API calls, etc.
├── tailwind.config.js           # Tailwind CSS configuration
└── package.json                 # Project metadata and dependencies
