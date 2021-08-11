<?php 
include('../include/data.php');
include('../include/header.html');
?>

        <!--************ CONTENT-->
        <?= $notification; ?>
        <section class="content">
            <section class="block">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8">
                            <form class="form clearfix" method="post">
                                <div class="form-group">
                                    <label for="nom" class="col-form-label required">Your Name</label>
                                    <input name="nom" type="text" class="form-control" id="nom" placeholder="Your Name">
                                </div>
                                <div class="form-group">
                                    <label for="email" class="col-form-label required">Email</label>
                                    <input name="email" type="email" class="form-control" id="email" placeholder="Your Email">
                                </div>
                                <div class="form-group">
                                    <label for="mdp" class="col-form-label required">Password</label>
                                    <input name="mdp" type="password" class="form-control" id="mdp" placeholder="Password">
                                </div>
                                <div class="form-group">
                                    <label for="repeat_mdp" class="col-form-label required">Repeat Password</label>
                                    <input name="repeat_mdp" type="password" class="form-control" id="repeat_mdp" placeholder="Repeat Password">
                                </div>
                                <div class="d-flex justify-content-between align-items-baseline">
                                    <label>
                                        <input type="checkbox" name="newsletter" value="1">
                                        Receive Newsletter
                                    </label>
                                    <button type="submit" class="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <hr>
                            <p>
                                By clicking "Register" button, you agree with our <a href="#" class="link">Terms & Conditions.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>

<?php 
include('../include/footer.html');
?>