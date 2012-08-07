<?php

namespace Webalibre\SeccionesBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class DefaultController extends Controller
{
    
    // Obtengo la accion leyendo la url, para poder usarla en el menú de navegación.
    public function getActionName() {
        $url = $_SERVER['REQUEST_URI'];
        $url_exp = explode('/', $url);
        $accion = end($url_exp);
        return $accion;
    }

    public function homepageAction() {
        return $this->render('WebalibreSeccionesBundle:Default:homepage.html.twig', array(
                                                                                            'actionname' => $this->getActionName()));
    }

    public function symfony2Action() {
        return $this->render('WebalibreSeccionesBundle:Default:symfony2.html.twig', array(
                                                                                            'actionname' => $this->getActionName()));
    }

    public function linuxAction() {
        return $this->render('WebalibreSeccionesBundle:Default:linux.html.twig', array(
                                                                                            'actionname' => $this->getActionName()));
    }

  public function jqueryAction() {
        return $this->render('WebalibreSeccionesBundle:Default:jquery.html.twig', array(
                                                                                            'actionname' => $this->getActionName()));
         }

    public function otrosAction() {
        return $this->render('WebalibreSeccionesBundle:Default:otros.html.twig', array(
                                                                                            'actionname' => $this->getActionName()));
    }

    public function portfolioAction() {
        return $this->render('WebalibreSeccionesBundle:Default:portfolio.html.twig', array(
                                                                                            'actionname' => $this->getActionName()));
    }

    public function contactoAction() {
        return $this->render('WebalibreSeccionesBundle:Default:contacto.html.twig', array(
                                                                                            'actionname' => $this->getActionName()));
    }


}
