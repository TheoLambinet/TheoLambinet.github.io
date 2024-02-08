<?php
  include "template/header.php";
?>
        
        <main>
            <h2>Des questions ?</h2>

            <form method="POST" action="ajoutMsg.php">
                <label>
                    Prénom
                    <input type="text" name="prenom" maxlength="32" required>
                </label>

                <label>
                    NOM
                    <input type="text" name="nom" maxlength="64" required>
                </label>

                <label id="objet">
                    Objet de la demande
                    <input type="text" name="objet" maxlength="32" required>
                </label>

                <label id="msg">
                    Message
                    <textarea name="msg" cols="50" rows="3" maxlength="256" required></textarea>
                </label>

                <input type="submit">
            </form>
        </main>

<?php
  include "template/footer.php";
?>