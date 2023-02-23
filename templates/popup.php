<input type="checkbox" name="popUpToggle" id="popUpToggle">
<div class="popUp <?php if($alert) {print 'alert';} ?>">
  <label for="popUpToggle"></label>
  <div class="row">
    <div class="col">
      <?php if(isset($popup_content)){print $popup_content;} ?>
    </div>
  </div>
</div>