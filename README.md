# Zendesk Ticket Viewer

The Zendesk Ticket Viewer application fetches tickets from API Server. Each page displays up to 25 tickets, and users can navigate through the pages to view different tickets, delete any individual ticket.

## Getting Started

### Prerequisites

To run this application, you need [Node.js](https://nodejs.org) installed on your machine.

### Installation

1. Clone the repository:

   `git clone https://github.com/guptahimanshu07/zendesk-crud-client.git`

3. Move into the project directory:

   `cd zendesk-crud-client`

4. Install dependencies:

   `npm install react react-dom axios`

5. Create a `.env` file in the root of your project and add your API's base URL:

   `REACT_APP_API_BASE_URL=<your-api-base-url>`

6. Start the application:

   `npm start`

## Usage

Once the application is running, it loads and displays a table with tickets. Use the 'Next' and 'Prev' buttons to navigate through different pages of tickets. Each ticket has a 'Delete' button that can be used to delete the ticket.
