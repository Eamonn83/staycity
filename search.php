<?php include 'inc/header.php'; ?>
    <section class="content-section">
        <h1><span>Thank</span> you  <span>for choosing staycity apart</span>hotels<span>!</span></h1>
        <div class="results<?php if(! $_POST): ?> err-result<?php endif ?>">
            <?php if($_POST): ?>
                <?php
                    $city_select = $_POST['city'];
                    $apartment_select = ucwords(str_replace("-", " ", $_POST['apartment']));
                    $check_in_date = $_POST['check-in-date'];
                    $check_out_date = $_POST['check-out-date'];
                ?>
                <h2 class="your-options">Here are the options you selected:</h2>
                <p><strong>City:</strong> <?php echo $city_select; ?></p>
                <p><strong>Apartment:</strong> <?php echo $apartment_select; ?></p>
                <p><strong>Check in:</strong> <?php echo $check_in_date; ?></p>
                <p><strong>Check out:</strong> <?php echo $check_out_date; ?></p>
                <div class="cta">
                    <p><a href="index.php" title="Go back">Go back</a></p>
                </div> <!-- .cta -->
            <?php else: ?>
                <h1 class="err-msg">Oops! Looks like you've landed here by mistake, please <a href="index.php" title="go back">go back</a> and fill out the search form!</h1>
            <?php endif ?>
        </div> <!-- .results -->
    </section> <!-- .content-section -->
<?php include 'inc/footer.php'; ?>