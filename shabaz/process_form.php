<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the selected document type
    $documentType = $_POST['_2a0a2a0a2a0a1a'];

    // Depending on the document type, retrieve the relevant field value
    switch ($documentType) {
        case '04':
            $fieldValue = $_POST['dfttaField'];
            break;
        case '98':
            $fieldValue = $_POST['immiCardField'];
            break;
        case '01':
            $fieldValue = $_POST['passportField'];
            break;
        // Add more cases as needed for other document types
        default:
            $fieldValue = ''; // Default case
            break;
    }

    // Example MySQL connection parameters
    $servername = "localhost";
    $username = "your_username";
    $password = "your_password";
    $database = "your_database_name";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare SQL statement with placeholders to prevent SQL injection
    $sql = "SELECT * FROM your_table_name WHERE document_type = ? AND document_value = ?";
    
    // Prepare statement
    $stmt = $conn->prepare($sql);
    
    // Bind parameters
    $stmt->bind_param("ss", $documentType, $fieldValue);
    
    // Execute statement
    $stmt->execute();
    
    // Get result
    $result = $stmt->get_result();

    // Check if any results were found
    if ($result->num_rows > 0) {
        // Start session to store results for display in results.php
        session_start();
        
        // Store results in session variable
        $_SESSION['results'] = array();

        // Output data of each row and store in session
        while($row = $result->fetch_assoc()) {
            $_SESSION['results'][] = $row;
        }

        // Redirect to results.php
        header("Location: results.php");
        exit();
    } else {
        echo "No results found";
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}
?>
