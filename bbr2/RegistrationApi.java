// import java.sql.Connection;
// import java.sql.DriverManager;
// import java.sql.PreparedStatement;
// import java.sql.SQLException;

// public class RegistrationApi {

//     private static final String JDBC_URL = "jdbc:mysql://localhost:3306/bbe";
//     private static final String USERNAME = "localhost";
//     private static final String PASSWORD = "9899803387Ak@";

//     private static final String INSERT_USER_SQL = "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";

//     public static void main(String[] args) {
//         // Sample registration data
//         String username = "john_doe";
//         String password = "secure_password";
//         String email = "john.doe@example.com";

//         // Register user
//         registerUser(username, password, email);
//     }

//     private static void registerUser(String username, String password, String email) {
//         try (
//                 Connection connection = DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD);
//                 PreparedStatement preparedStatement = connection.prepareStatement(INSERT_USER_SQL)) {
//             // Set parameters for the SQL query
//             preparedStatement.setString(1, username);
//             preparedStatement.setString(2, password);
//             preparedStatement.setString(3, email);

//             // Execute the SQL query
//             int rowsAffected = preparedStatement.executeUpdate();

//             if (rowsAffected > 0) {
//                 System.out.println("User registered successfully!");
//             } else {
//                 System.out.println("Failed to register user.");
//             }
//         } catch (SQLException e) {
//             e.printStackTrace();
//         }
//     }
// }
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class RegistrationApi {

    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/bbe";
    private static final String USERNAME = "localhost";
    private static final String PASSWORD = "9899803387Ak@";

    private static final String INSERT_USER_SQL = "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";

    public static void main(String[] args) {
        // Load the MySQL JDBC driver
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            return; // Terminate the program if the driver is not found
        }

        // Sample registration data
        String username = "john_doe";
        String password = "secure_password";
        String email = "john.doe@example.com";

        // Register user
        registerUser(username, password, email);
    }

    private static void registerUser(String username, String password, String email) {
        try (
                Connection connection = DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD);
                PreparedStatement preparedStatement = connection.prepareStatement(INSERT_USER_SQL)) {
            // Set parameters for the SQL query
            preparedStatement.setString(1, username);
            preparedStatement.setString(2, password);
            preparedStatement.setString(3, email);

            // Execute the SQL query
            int rowsAffected = preparedStatement.executeUpdate();

            if (rowsAffected > 0) {
                System.out.println("User registered successfully!");
            } else {
                System.out.println("Failed to register user.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
