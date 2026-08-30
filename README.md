# CRM Dummy

A full-stack Customer Relationship Management (CRM) application built with a separated backend API and web frontend architecture.

## Project Structure

```
CRM_dummy/
├── CRM_D.API/      # Backend REST API
└── CRM_D.WEB/      # Frontend web application
```

### `CRM_D.API`
The backend service that exposes REST API endpoints for all CRM operations — managing contacts, leads, and customer data.

### `CRM_D.WEB`
The frontend web application that consumes the API and provides the user interface for interacting with the CRM.

---

## Getting Started

### Prerequisites

- [.NET SDK](https://dotnet.microsoft.com/download) (if using ASP.NET Core backend)
- [Node.js](https://nodejs.org/) (if the web frontend uses a JS framework)
- A relational database (e.g. SQL Server, PostgreSQL, or SQLite)

### Clone the Repository

```bash
git clone https://github.com/harshiit1/CRM_dummy.git
cd CRM_dummy
```

---

## Running the API (`CRM_D.API`)

```bash
cd CRM_D.API
```

Restore dependencies and run:

```bash
dotnet restore
dotnet run
```

The API will start on `https://localhost:5001` (or as configured). Update your connection string in `appsettings.json` before running.

---

## Running the Web App (`CRM_D.WEB`)

```bash
cd CRM_D.WEB
```

If it's a Node-based frontend:

```bash
npm install
npm start
```

Or, if it's a .NET Razor/Blazor app:

```bash
dotnet restore
dotnet run
```

---

## Configuration

Before running the project, update the following configuration files as needed:

- **`CRM_D.API/appsettings.json`** — database connection string, API settings
- **`CRM_D.WEB`** — API base URL (point to the running `CRM_D.API` instance)

---

## Features

- Contact and lead management
- Customer relationship tracking
- REST API backend
- Dedicated web frontend

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

This project is open source. See the repository for details.
