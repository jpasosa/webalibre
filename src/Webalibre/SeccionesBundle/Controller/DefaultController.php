<?php

namespace Webalibre\SeccionesBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class DefaultController extends Controller
{
    
    public function homepageAction() {
        return $this->render('WebalibreSeccionesBundle:Default:homepage.html.twig');
    }

    public function symfony2Action() {
        return $this->render('WebalibreSeccionesBundle:Default:symfony2.html.twig');
    }

    public function linuxAction() {
        return $this->render('WebalibreSeccionesBundle:Default:linux.html.twig');
    }

  public function jqueryAction() {
        $acciones = $this->getAction();
        // echo $acciones;
        return $this->render('WebalibreSeccionesBundle:Default:jquery.html.twig');
         }

    public function otrosAction() {
        return $this->render('WebalibreSeccionesBundle:Default:otros.html.twig');
    }

    public function portfolioAction() {
        return $this->render('WebalibreSeccionesBundle:Default:portfolio.html.twig');
    }

    public function contactoAction() {
        return $this->render('WebalibreSeccionesBundle:Default:contacto.html.twig');
    }


}
