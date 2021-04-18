<?php include 'inc/header.php'; ?>
    <section class="content-section">
        <h2>Choose where you would like to book an apartment!</h2>
        <form class="search-form" action="search.php" method="POST">
            <fieldset>
                <div class="row">
                    <div class="col col-1">
                        <p><i class="fas fa-map-marker-alt"></i></p>
                        <select class="city-select" name="city" required>
                            <option value="">Select a Location</option>
                        </select>
                    </div> <!-- .col-1 -->
                    <div class="col col-2">
                        <p><i class="fas fa-city"></i></p>
                        <select class="apartment-select" name="apartment" required>
                            <option value="" disabled selected>Any Aparthotel</option>
                        </select>
                    </div> <!-- .col-2 -->
                    <div class="col col-3">
                        <p><i class="far fa-calendar-alt"></i></p>
                        <input id="check-in-date" name="check-in-date" autocomplete="off" required>
                    </div> <!-- .col-3 -->
                    <div class="col col-4">
                        <p><i class="fas fa-calendar-alt"></i></p>
                        <input id="check-out-date" name="check-out-date" autocomplete="off" required disabled>
                    </div> <!-- .col-4 -->
                    <div class="col col-5">
                        <p><i class="fas fa-search"></i></p>
                        <input type="submit" value="Search" />
                    </div> <!-- .col-5 -->
                </div> <!-- .row -->
            </fieldset>
        </form> <!-- .search-form -->
    </section> <!-- .content-section -->
<?php include 'inc/footer.php'; ?>